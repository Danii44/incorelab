"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLenis } from "@/components/layout/SmoothScrollProvider";
import { socialLinks, navLinks, contactInfo } from "@/data/navigation";
import { Copy, Check, ArrowUp, ArrowUpRight, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  const { scrollTo } = useLenis();
  const [copied, setCopied] = useState(false);

  const email = contactInfo.email;
  const phone = contactInfo.phone;
  const whatsappUrl = contactInfo.whatsappUrl;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleScrollToTop = () => {
    scrollTo(0);
  };

  return (
    <footer className="relative border-t border-border bg-surface/30 pt-20 pb-12 overflow-hidden">
      <Container size="fluid">
        {/* Massive Headline Section with Circular Magnetic Button */}
        <div className="relative pb-16 sm:pb-24 border-b border-border">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <div className="mb-6 inline-block">
                <div className="relative flex items-center justify-center rounded-xl bg-[#0E0E10] px-4 py-2 border border-white/10 shadow-md">
                  <Image
                    src="/logo/incorelab-logo.png"
                    alt="incorelab"
                    width={150}
                    height={32}
                    style={{ width: "auto" }}
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>
              </div>
              <span className="font-mono-custom text-xs text-accent tracking-widest uppercase block mb-4 font-semibold">
                ✦ START A NEW ENGAGEMENT
              </span>
              <h2 className="font-display headline-huge tracking-tighter text-text uppercase">
                Let&apos;s talk<span className="text-accent">.</span>
              </h2>
            </div>

            <div className="flex items-center">
              <Button
                href="/contact"
                variant="circle"
                magneticStrength={0.4}
                className="group"
              >
                <span>Start a</span>
                <span className="text-xl sm:text-2xl font-black">Project</span>
                <ArrowUpRight className="h-5 w-5 stroke-[2] mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Footer Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-border">
          {/* Email & Phone with Direct Links */}
          <div className="flex flex-col gap-4">
            <span className="font-mono-custom text-xs text-muted tracking-widest uppercase font-semibold">
              Direct Contact
            </span>

            <div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex items-center gap-2.5 text-left font-display text-xl sm:text-2xl font-bold text-text hover:text-accent transition-colors focus-visible:outline-none"
                data-cursor-pointer
                aria-label="Copy email address to clipboard"
              >
                <span>{email}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-muted group-hover:border-accent group-hover:text-accent transition-colors flex-shrink-0">
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-accent stroke-[2.5]" />
                  ) : (
                    <Copy className="h-3.5 w-3.5 stroke-[2]" />
                  )}
                </span>
              </button>
              <p className="font-mono-custom text-[11px] text-muted mt-1">
                {copied ? (
                  <span className="text-accent font-semibold">
                    ✓ Copied to clipboard
                  </span>
                ) : (
                  "Click to copy address"
                )}
              </p>
            </div>

            {/* Direct Phone & WhatsApp Link */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 font-mono-custom text-xs text-text hover:text-accent transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-accent" />
                <span>{contactInfo.phoneFormatted}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono-custom text-[11px] text-accent font-semibold hover:bg-accent hover:text-[#0E0E10] transition-colors w-fit"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Studio Location & Local Time */}
          <div className="flex flex-col gap-3">
            <span className="font-mono-custom text-xs text-muted tracking-widest uppercase font-semibold">
              Global Presence
            </span>
            <div className="font-display text-lg font-medium text-text">
              Zurich ✦ Dubai ✦ New York
            </div>
            <p className="font-body text-xs text-muted leading-relaxed">
              Serving high-growth startups and established brands worldwide across European, Gulf, and US time zones.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-mono-custom text-xs text-muted tracking-widest uppercase font-semibold">
              Index
            </span>
            <ul className="flex flex-col gap-2 font-mono-custom text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-text transition-colors flex items-center gap-2"
                  >
                    <span className="text-accent">{link.number}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links with Direct Instagram, Facebook, WhatsApp */}
          <div className="flex flex-col gap-3">
            <span className="font-mono-custom text-xs text-muted tracking-widest uppercase font-semibold">
              Official Channels
            </span>
            <ul className="flex flex-col gap-2.5 font-mono-custom text-xs">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3 w-3 stroke-[1.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 font-mono-custom text-xs text-muted">
          <div>
            © {new Date().getFullYear()} INCORELAB (incorelab.com). ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>NEXT.JS &amp; SHOPIFY DIGITAL STUDIO</span>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 text-text hover:text-accent transition-colors focus-visible:outline-none"
              data-cursor-pointer
            >
              <span>BACK TO TOP</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface group-hover:border-accent group-hover:text-accent transition-colors">
                <ArrowUp className="h-3.5 w-3.5 stroke-[2] transition-transform group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
