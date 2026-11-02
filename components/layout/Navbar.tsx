"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { Button } from "@/components/ui/Button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { navLinks, socialLinks } from "@/data/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change directly during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Helper to get translated nav label
  const getNavLabel = (href: string, fallback: string) => {
    if (href === "/work") return t.nav.work;
    if (href === "/services") return t.nav.services;
    if (href === "/about") return t.nav.about;
    if (href === "/contact") return t.nav.contact;
    return fallback;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);


  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-5 pb-4">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
              isScrolled
                ? "border border-border/80 bg-surface/75 backdrop-blur-xl shadow-lg shadow-black/5"
                : "bg-transparent"
            }`}
          >
            {/* Official Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="group relative flex items-center gap-2 focus-visible:outline-none"
                data-cursor-pointer
                aria-label="incorelab home"
              >
                <div className="relative flex items-center justify-center rounded-xl bg-[#0E0E10] px-3.5 py-1.5 border border-white/10 shadow-sm transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_25px_rgba(122,125,248,0.3)]">
                  <Image
                    src="/logo/incorelab-logo.png"
                    alt="incorelab"
                    width={130}
                    height={28}
                    style={{ width: "auto" }}
                    className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Center Links */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-border/50 bg-surface/40 p-1.5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <MagneticWrapper key={link.href} strength={0.2}>
                    <Link
                      href={link.href}
                      className={`relative px-4 py-1.5 font-mono-custom text-xs font-medium tracking-wider transition-colors duration-200 rounded-full ${
                        isActive
                          ? "text-text font-bold"
                          : "text-muted hover:text-text"
                      }`}
                      data-cursor-pointer
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-full bg-border/50 -z-10"
                          transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        />
                      )}
                      <span>{getNavLabel(link.href, link.label)}</span>
                    </Link>
                  </MagneticWrapper>
                );
              })}
            </div>

            {/* Desktop Right Actions: Currency & Language Switcher + Theme Toggle + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <LocaleSwitcher />
              <ThemeToggle />
              <Button href="/contact" variant="pill" size="sm" withArrow>
                {t.nav.talk}
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <LocaleSwitcher />
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 stroke-[1.5]" />
                ) : (
                  <Menu className="h-5 w-5 stroke-[1.5]" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg/95 backdrop-blur-2xl px-6 pt-28 pb-10 md:hidden"
          >
            {/* Navigation Links */}
            <div className="flex flex-col gap-5">
              <span className="font-mono-custom text-xs text-muted tracking-widest uppercase">
                {t.nav.menu}
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-baseline justify-between border-b border-border/60 py-3 font-display text-4xl font-semibold tracking-tight text-text hover:text-accent transition-colors"
                  >
                    <span>{getNavLabel(link.href, link.label)}</span>
                    <span className="font-mono-custom text-sm text-muted">
                      {link.number}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Mobile Info */}
            <div className="flex flex-col gap-6 pt-6 border-t border-border">
              <Button
                href="/contact"
                variant="pill"
                size="lg"
                withArrow
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.talk}
              </Button>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {socialLinks.slice(0, 4).map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-custom text-xs text-muted hover:text-accent transition-colors flex items-center gap-1"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3 w-3 stroke-[1.5]" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
