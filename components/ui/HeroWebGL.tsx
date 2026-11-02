"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroWebGL() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || reducedMotion) return;

    const container = containerRef.current;
    let animationFrameId: number;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 3.6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Vertex Shader with organic harmonic noise displacement
    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying float vDisplacement;

      float organicNoise(vec3 p) {
        float n = sin(p.x * 1.4 + uTime * 0.35) * cos(p.y * 1.4 + uTime * 0.28) * sin(p.z * 1.4 + uTime * 0.22);
        n += 0.5 * sin(p.y * 2.8 - uTime * 0.45) * cos(p.z * 2.8 + uTime * 0.35);
        n += 0.25 * sin(p.z * 5.2 + uTime * 0.6) * cos(p.x * 5.2 - uTime * 0.3);
        return n;
      }

      void main() {
        vUv = uv;
        vNormal = normal;

        // Subtle displacement influenced by harmonic noise and cursor
        float mouseEffect = dot(position.xy, uMouse) * 0.14;
        float displacement = organicNoise(position * 1.1) * 0.36 + mouseEffect;
        vDisplacement = displacement;

        vec3 newPosition = position + normal * displacement;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    // Fragment Shader with themed chromatic gradients
    const fragmentShader = `
      uniform float uTime;
      uniform vec3 uColorAccent;
      uniform vec3 uColorBase;
      uniform vec3 uColorMuted;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying float vDisplacement;

      void main() {
        // Fresnel rim
        vec3 viewDirection = normalize(vec3(0.0, 0.0, 1.0));
        float fresnel = 1.0 - max(dot(vNormal, viewDirection), 0.0);
        fresnel = pow(fresnel, 2.2);

        // Mix gradient based on displacement
        vec3 color = mix(uColorBase, uColorMuted, smoothstep(-0.4, 0.4, vDisplacement));
        color = mix(color, uColorAccent, smoothstep(0.08, 0.45, vDisplacement + fresnel * 0.35));

        // Subtle rim glow
        color += uColorAccent * fresnel * 0.65;

        // Smooth radial & silhouette falloff so the fluid mesh blends seamlessly like living ambient mist
        float centerFacing = max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
        float softFalloff = pow(centerFacing, 1.4) * 0.32;

        gl_FragColor = vec4(color, softFalloff);
      }
    `;

    // Read theme colors directly from globals.css (zero hardcoded values)
    const getThemeColor = (cssVar: string) => {
      const val = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
      return new THREE.Color(val);
    };

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColorAccent: {
        value: getThemeColor("--accent"),
      },
      uColorBase: {
        value: getThemeColor("--bg"),
      },
      uColorMuted: {
        value: getThemeColor("--border"),
      },
    };

    const geometry = new THREE.IcosahedronGeometry(1.35, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      wireframe: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse tracking for subtle tilt
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle scroll parallax
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle window resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;
      uniforms.uTime.value = elapsedTime;

      // Smooth mouse interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;
      uniforms.uMouse.value.set(currentMouseX, currentMouseY);

      // Subtle rotation
      mesh.rotation.y = elapsedTime * 0.12 + currentMouseX * 0.25;
      mesh.rotation.x = elapsedTime * 0.08 + currentMouseY * 0.25;

      // Parallax on scroll
      mesh.position.y = -scrollY * 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [resolvedTheme, reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none opacity-40">
        <div className="h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-[0] h-full w-full pointer-events-none overflow-hidden opacity-40 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
