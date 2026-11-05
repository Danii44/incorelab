"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Check,
  Send,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  Copy,
  ShieldCheck,
  Sparkles,
  Phone,
  Code2,
  ShoppingBag,
  Smartphone,
  Box,
  Palette,
  Cpu,
  TrendingUp,
  Cloud,
  Clock,
  Star,
  Lock,
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name (at least 2 characters)"),
  email: z.string().email("Please enter a valid work or personal email"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please pick an estimated budget range"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().min(10, "Please share a brief note about what you want to build"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface BudgetTier {
  id: string;
  aed: string;
  usd: string;
  labelEn: string;
  labelAr: string;
  subEn: string;
  subAr: string;
  recommended?: boolean;
}

const budgetTiers: BudgetTier[] = [
  {
    id: "tier-1",
    aed: "AED 5K – 15K",
    usd: "$1.4K – $4K USD",
    labelEn: "Sprint / MVP / Tool",
    labelAr: "سبرنت / نموذج أولي",
    subEn: "Landing pages, focused tools, mini automations",
    subAr: "صفحات هبوط وأدوات سريعة",
  },
  {
    id: "tier-2",
    aed: "AED 15K – 35K",
    usd: "$4K – $9.5K USD",
    labelEn: "Custom Web / Shopify",
    labelAr: "موقع مخصص / شوبيفاي",
    subEn: "Next.js websites, custom Shopify stores",
    subAr: "مواقع ويب ومتاجر متكاملة",
    recommended: true,
  },
  {
    id: "tier-3",
    aed: "AED 35K – 75K",
    usd: "$9.5K – $20K USD",
    labelEn: "Full Platform & Mobile",
    labelAr: "منصة ويب وتطبيق جوال",
    subEn: "React Native apps, 3D interactive portals",
    subAr: "تطبيقات جوال وعوالم تفاعلية",
  },
  {
    id: "tier-4",
    aed: "AED 75K+",
    usd: "$20K+ USD",
    labelEn: "Enterprise Solution",
    labelAr: "أنظمة مؤسسية ضخمة",
    subEn: "Complex ecosystems, multi-tenant ERPs",
    subAr: "بوابات مؤسسية ومقاييس ضخمة",
  },
];

interface ServiceChoice {
  id: string;
  nameEn: string;
  nameAr: string;
  category: string;
  icon: React.ElementType;
  badge?: string;
}

const serviceChoices: ServiceChoice[] = [
  { id: "web-dev", nameEn: "Next.js Web Apps", nameAr: "تطبيقات الويب (Next.js)", category: "WEB", icon: Code2, badge: "Popular" },
  { id: "ecom", nameEn: "Custom Shopify Stores", nameAr: "متاجر شوبيفاي المخصصة", category: "COMMERCE", icon: ShoppingBag },
  { id: "mobile", nameEn: "Mobile Apps (iOS & Android)", nameAr: "تطبيقات الجوال", category: "MOBILE", icon: Smartphone },
  { id: "webgl", nameEn: "3D WebGL Experiences", nameAr: "تجارب 3D ثلاثية الأبعاد", category: "3D", icon: Box },
  { id: "branding", nameEn: "UI/UX & Design Systems", nameAr: "تصميم الواجهات والهوية", category: "DESIGN", icon: Palette },
  { id: "ai", nameEn: "Applied AI & Automation", nameAr: "حلول الذكاء الاصطناعي", category: "AI", icon: Cpu, badge: "High Demand" },
  { id: "growth", nameEn: "Technical SEO & Growth", nameAr: "تحسين محركات البحث والنمو", category: "GROWTH", icon: TrendingUp },
  { id: "cloud", nameEn: "Cloud & DevOps Hosting", nameAr: "الاستضافة السحابية", category: "CLOUD", icon: Cloud },
];

const quickPromptSuggestions = [
  "Looking for a full custom redesign from scratch",
  "Target launch date is within 4-6 weeks",
  "Custom Shopify Plus store with bespoke checkout",
  "React Native mobile app for iOS and Android",
];

export default function ContactPage() {
  const { t, currency, isRTL } = useLocale();
  const c = t.contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [apiError, setApiError] = useState("");
  const [copied, setCopied] = useState(false);
  const [dubaiTime, setDubaiTime] = useState("");

  // Live Dubai Time Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setDubaiTime(timeStr);
      } catch {
        setDubaiTime("GST");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const defaultBudgetText =
    currency === "AED"
      ? `${budgetTiers[1].aed} (~${budgetTiers[1].usd})`
      : `${budgetTiers[1].usd} (~${budgetTiers[1].aed})`;

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: defaultBudgetText,
      services: [serviceChoices[0].nameEn],
      message: "",
    },
  });

  const currentMessage = watch("message");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact@incorelab.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // ignore
    }
  };

  const handleApplyPrompt = (prompt: string) => {
    const nextVal = currentMessage
      ? `${currentMessage.trim()}\n• ${prompt}`
      : `• ${prompt}`;
    setValue("message", nextVal, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setApiError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setReferenceId(result.data?.referenceId || "INC-2025-X");
        reset();
      } else {
        setApiError(result.message || "Failed to submit. Please try again or email us directly.");
      }
    } catch {
      setApiError("Network error. Please try again or send a direct email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden min-h-screen bg-bg">
      {/* Background Layer 1: Ambient Sunlight Caustic Beam */}
      <div
        className="pointer-events-none absolute -top-10 -left-20 sm:left-0 w-[140%] sm:w-full h-full max-w-[1600px] z-[0] select-none opacity-20 dark:opacity-30 mix-blend-soft-light dark:mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/architectural-sunlight-caustic.png"
          alt=""
          fill
          priority
          loading="eager"
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Background Layer 2: 3D Chromatic Splash Ambient Atmosphere */}
      <div
        className="pointer-events-none absolute -right-28 top-12 w-[520px] sm:w-[750px] h-[520px] sm:h-[750px] z-[0] select-none opacity-30 dark:opacity-45 mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/hero-splash.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 520px, 750px"
        />
      </div>

      {/* Background Layer 3: Vibrant Radial Atmospheric Auroras */}
      <div className="pointer-events-none absolute top-1/6 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-gradient-to-tr from-accent/25 via-[#38BDF8]/20 to-[#EC4899]/15 blur-[140px] z-[0]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-accent/15 blur-[120px] z-[0]" />

      <Container size="fluid" className="relative z-10">
        {/* Editorial Top Headline Banner */}
        <div className="border-b border-border/70 pb-12 sm:pb-16 mb-12 sm:mb-16">
          {/* Top Telemetry Tag Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-4 py-1.5 font-mono-custom text-xs text-text shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-semibold text-accent">{c.tag}</span>
              <span className="text-muted/60">✦</span>
              <span className="text-muted">DUBAI &amp; ZURICH</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono-custom text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE // {dubaiTime || "DUBAI GST"}</span>
              </div>
              <span className="hidden sm:inline-block font-mono-custom text-xs text-muted">
                {c.replyTime}
              </span>
            </div>
          </div>

          {/* Main Kinetic Headline */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="font-display headline-huge font-bold uppercase tracking-tight text-text leading-[0.92]">
                Have a project<br className="hidden sm:inline" /> in mind<span className="text-accent">?</span>
              </h1>
              <p className="mt-6 font-display text-lg sm:text-xl text-text/85 font-normal leading-relaxed max-w-2xl">
                Direct senior engineering partnership. Transparent fixed milestone pricing, weekly deployments, and zero agency bloat.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 flex-shrink-0">
              <a
                href="https://wa.me/971588741441?text=Hello%20IncoreLab,%20I'd%20like%20to%20discuss%20a%20new%20project%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 font-mono-custom text-xs font-bold uppercase text-[#0E0E10] shadow-lg shadow-accent/20 hover:scale-[1.03] transition-transform"
                data-cursor-pointer
              >
                <MessageCircle className="h-4 w-4 stroke-[2.5]" />
                <span>WhatsApp Founder</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-5 py-3.5 font-mono-custom text-xs font-semibold text-text hover:border-accent hover:text-accent transition-colors backdrop-blur-md"
                data-cursor-pointer
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-accent stroke-[2.5]" />
                    <span className="text-accent">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 stroke-[1.8]" />
                    <span>Copy Direct Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Studio Executive Dossier (Cols 1-4) */}
          <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32">
            {/* Studio Partner Card */}
            <div className="rounded-3xl border border-border/80 bg-surface/70 p-6 sm:p-8 backdrop-blur-xl shadow-lg relative overflow-hidden group">
              <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 bg-accent/10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between pb-6 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-accent to-[#38BDF8] text-[#0E0E10] font-bold shadow-md shadow-accent/20">
                    <span className="font-mono-custom text-sm font-extrabold">IN</span>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-text">IncoreLab Atelier</h3>
                    <span className="font-mono-custom text-[11px] text-muted">SOFTWARE ARCHITECTURE</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono-custom text-[10px] text-emerald-400 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="py-6 flex flex-col gap-4 border-b border-border/60">
                {/* Email */}
                <div>
                  <span className="font-mono-custom text-[11px] text-muted uppercase tracking-wider block mb-1.5 font-semibold">
                    DIRECT EMAIL
                  </span>
                  <div className="flex items-center justify-between gap-2 rounded-2xl border border-border bg-bg/60 p-3 hover:border-accent transition-colors">
                    <a
                      href="mailto:contact@incorelab.com"
                      className="font-mono-custom text-xs sm:text-sm font-semibold text-text hover:text-accent transition-colors truncate"
                    >
                      contact@incorelab.com
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-surface text-muted hover:border-accent hover:text-accent transition-colors flex-shrink-0"
                      title="Copy email"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-accent stroke-[2.5]" />
                      ) : (
                        <Copy className="h-4 w-4 stroke-[1.8]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <span className="font-mono-custom text-[11px] text-muted uppercase tracking-wider block mb-1.5 font-semibold">
                    PHONE &amp; WHATSAPP
                  </span>
                  <a
                    href="https://wa.me/971588741441?text=Hello%20IncoreLab,%20I'd%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-border bg-bg/60 p-3 hover:border-accent group/wa transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span className="font-mono-custom text-xs sm:text-sm font-semibold text-text group-hover/wa:text-accent transition-colors">
                        +971 58 874 1441
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted group-hover/wa:text-accent group-hover/wa:translate-x-0.5 group-hover/wa:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Studio Locations */}
              <div className="pt-6">
                <span className="font-mono-custom text-[11px] text-muted uppercase tracking-wider block mb-3 font-semibold">
                  DUAL STUDIO BASES
                </span>
                <div className="grid grid-cols-2 gap-3 font-mono-custom text-xs">
                  <div className="rounded-xl border border-border/70 bg-bg/40 p-3">
                    <span className="text-accent font-bold block mb-1">DUBAI, UAE</span>
                    <span className="text-muted text-[11px] block">Downtown / GST</span>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-bg/40 p-3">
                    <span className="text-accent font-bold block mb-1">ZURICH, CH</span>
                    <span className="text-muted text-[11px] block">Bahnhofstr / CET</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Commitments & Delivery Standards */}
            <div className="rounded-3xl border border-border/80 bg-surface/70 p-6 sm:p-8 backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-2 font-mono-custom text-xs text-text uppercase tracking-wider font-bold mb-5">
                <Sparkles className="h-4 w-4 text-accent" />
                <span>{c.whatToExpect}</span>
              </div>

              <div className="flex flex-col gap-3.5">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-semibold text-text block">
                      Direct Senior Engineering
                    </span>
                    <span className="font-body text-xs text-muted leading-relaxed">
                      You talk directly to the engineers building your software. Zero sales reps or middle managers.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-semibold text-text block">
                      Fixed Milestone Pricing
                    </span>
                    <span className="font-body text-xs text-muted leading-relaxed">
                      Predictable budgets with structured deliverables and zero hidden fees.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-semibold text-text block">
                      100% Code &amp; IP Ownership
                    </span>
                    <span className="font-body text-xs text-muted leading-relaxed">
                      All Git repositories, Figma files, and cloud setups are transferred directly to you.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-semibold text-text block">
                      Sub-400ms High Performance
                    </span>
                    <span className="font-body text-xs text-muted leading-relaxed">
                      Blazing fast Next.js architectures optimized for conversion and Google Core Web Vitals.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Testimonial Endorsement */}
            <div className="rounded-3xl border border-border/80 bg-surface/70 p-6 backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 stroke-none" />
                ))}
              </div>
              <p className="font-display text-sm text-text/90 italic leading-relaxed mb-4">
                &ldquo;Finding an engineer in Dubai who can combine world-class UI aesthetics with heavy-duty AI pipeline engineering is exceptionally rare. Danish architected our platform flawlessly.&rdquo;
              </p>
              <div className="flex items-center justify-between font-mono-custom text-xs">
                <span className="font-bold text-text">TARIQ AL-MANSOOR</span>
                <span className="text-muted text-[11px]">PRODUCT LEAD, V0 LABS</span>
              </div>
            </div>

            {/* NDA Trust Assurance */}
            <div className="rounded-2xl border border-border/80 bg-bg/50 p-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent flex-shrink-0">
                <Lock className="h-4 w-4" />
              </div>
              <p className="font-body text-xs text-muted leading-relaxed">
                {c.confidentiality}
              </p>
            </div>
          </aside>

          {/* Right Column: Interactive Project Brief Form (Cols 5-12) */}
          <main className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-accent/40 bg-surface/90 p-8 sm:p-14 text-center backdrop-blur-2xl shadow-2xl relative overflow-hidden"
                >
                  <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 bg-accent/20 rounded-full blur-3xl" />

                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-accent text-[#0E0E10] shadow-xl shadow-accent/25">
                    <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
                  </div>

                  <span className="font-mono-custom text-xs text-accent tracking-widest uppercase block mb-2 font-bold">
                    INQUIRY TRANSMITTED SUCCESSFULLY
                  </span>

                  <h2 className="font-display headline-medium font-bold text-text mb-4">
                    {c.successTitle}
                  </h2>

                  <p className="mx-auto max-w-lg font-body text-base text-muted leading-relaxed mb-8">
                    {c.successMsg}
                  </p>

                  <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-bg/80 px-5 py-2.5 font-mono-custom text-xs text-muted mb-8 shadow-inner">
                    <span>REFERENCE CODE:</span>
                    <span className="text-accent font-bold tracking-wider">{referenceId}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button
                      type="button"
                      variant="pill"
                      size="lg"
                      onClick={() => setIsSubmitted(false)}
                    >
                      {c.submitAnother}
                    </Button>
                    <a
                      href="https://wa.me/971588741441"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 py-3.5 font-mono-custom text-xs text-accent font-bold hover:bg-accent hover:text-[#0E0E10] transition-colors"
                    >
                      <MessageCircle className="h-4 w-4 stroke-[2.5]" />
                      <span>{c.chatNow}</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-3xl border border-border/80 bg-surface/75 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-xl flex flex-col gap-10 relative overflow-hidden"
                  noValidate
                >
                  {apiError && (
                    <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 font-mono-custom text-xs text-red-400">
                      {apiError}
                    </div>
                  )}

                  {/* Section 1: Services Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[#0E0E10] font-mono-custom text-[11px] font-bold">
                          1
                        </span>
                        <label className="font-mono-custom text-xs text-text uppercase tracking-wider font-bold">
                          {c.stepServices}
                        </label>
                      </div>
                      <span className="font-mono-custom text-[11px] text-muted">
                        {c.selectAll}
                      </span>
                    </div>

                    <Controller
                      name="services"
                      control={control}
                      render={({ field }) => (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {serviceChoices.map((choice) => {
                            const choiceTitle = isRTL ? choice.nameAr : choice.nameEn;
                            const isSelected = field.value?.includes(choice.nameEn) || field.value?.includes(choice.nameAr);
                            const IconComponent = choice.icon;

                            return (
                              <button
                                key={choice.id}
                                type="button"
                                onClick={() => {
                                  const current = field.value || [];
                                  if (isSelected) {
                                    field.onChange(current.filter((s) => s !== choice.nameEn && s !== choice.nameAr));
                                  } else {
                                    field.onChange([...current, choiceTitle]);
                                  }
                                }}
                                className={`flex items-center justify-between rounded-2xl p-4 text-left border transition-all duration-200 group/chip ${isSelected
                                    ? "bg-accent/15 border-accent text-text shadow-md shadow-accent/10 ring-1 ring-accent"
                                    : "border-border/80 bg-bg/50 text-text/80 hover:border-accent/50 hover:bg-surface"
                                  }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div
                                    className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${isSelected
                                        ? "bg-accent text-[#0E0E10]"
                                        : "bg-surface text-muted group-hover/chip:text-accent group-hover/chip:bg-accent/10"
                                      }`}
                                  >
                                    <IconComponent className="h-4 w-4 stroke-[2]" />
                                  </div>
                                  <div className="min-w-0">
                                    <span className="font-display text-sm font-semibold text-text block truncate">
                                      {choiceTitle}
                                    </span>
                                    <span className="font-mono-custom text-[10px] text-muted block">
                                      {choice.category}
                                    </span>
                                  </div>
                                </div>

                                <div
                                  className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all flex-shrink-0 ml-3 ${isSelected
                                      ? "border-accent bg-accent text-[#0E0E10]"
                                      : "border-border"
                                    }`}
                                >
                                  {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    />
                    {errors.services && (
                      <p className="mt-2.5 font-mono-custom text-xs text-accent">
                        {errors.services.message}
                      </p>
                    )}
                  </div>

                  {/* Section 2: Budget Tiers */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[#0E0E10] font-mono-custom text-[11px] font-bold">
                          2
                        </span>
                        <label className="font-mono-custom text-xs text-text uppercase tracking-wider font-bold">
                          {c.stepBudget} ({currency})
                        </label>
                      </div>
                      <span className="font-mono-custom text-[11px] text-accent font-semibold">
                        {c.fixedMilestones}
                      </span>
                    </div>

                    <Controller
                      name="budget"
                      control={control}
                      render={({ field }) => (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {budgetTiers.map((tier) => {
                            const fullVal =
                              currency === "AED"
                                ? `${tier.aed} (~${tier.usd})`
                                : `${tier.usd} (~${tier.aed})`;
                            const isSelected = field.value?.includes(tier.aed) || field.value?.includes(tier.usd);
                            const primaryAmount = currency === "AED" ? tier.aed : tier.usd;
                            const secondaryAmount = currency === "AED" ? tier.usd : tier.aed;
                            const tierLabel = isRTL ? tier.labelAr : tier.labelEn;
                            const tierSub = isRTL ? tier.subAr : tier.subEn;

                            return (
                              <button
                                key={tier.id}
                                type="button"
                                onClick={() => field.onChange(fullVal)}
                                className={`rounded-2xl p-5 text-left border transition-all duration-200 flex flex-col justify-between relative group/tier ${isSelected
                                    ? "border-accent bg-accent/15 shadow-md shadow-accent/10 ring-1 ring-accent"
                                    : "border-border/80 bg-bg/50 hover:border-accent/50 hover:bg-surface"
                                  }`}
                              >
                                {tier.recommended && (
                                  <div className="absolute -top-2.5 right-4 rounded-full bg-accent px-2.5 py-0.5 font-mono-custom text-[9px] font-bold uppercase text-[#0E0E10] shadow-sm">
                                    MOST POPULAR
                                  </div>
                                )}

                                <div className="flex items-start justify-between gap-3 mb-3">
                                  <div>
                                    <span className="font-display text-lg font-bold text-text block">
                                      {primaryAmount}
                                    </span>
                                    <span className="font-mono-custom text-xs text-accent font-semibold">
                                      {secondaryAmount}
                                    </span>
                                  </div>

                                  <div
                                    className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all flex-shrink-0 mt-1 ${isSelected
                                        ? "border-accent bg-accent text-[#0E0E10]"
                                        : "border-border"
                                      }`}
                                  >
                                    {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                                  </div>
                                </div>

                                <div>
                                  <span className="font-display text-sm font-semibold text-text block mb-0.5">
                                    {tierLabel}
                                  </span>
                                  <span className="font-body text-xs text-muted leading-relaxed line-clamp-1">
                                    {tierSub}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    />
                    {errors.budget && (
                      <p className="mt-2.5 font-mono-custom text-xs text-accent">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>

                  {/* Section 3: Contact Details (Name, Email, Company) */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[#0E0E10] font-mono-custom text-[11px] font-bold">
                        3
                      </span>
                      <label className="font-mono-custom text-xs text-text uppercase tracking-wider font-bold">
                        YOUR DETAILS
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="font-mono-custom text-[11px] text-muted uppercase tracking-wider block mb-2 font-semibold"
                        >
                          {c.stepName}
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder={c.namePlaceholder}
                          {...register("name")}
                          className="w-full rounded-2xl border border-border/80 bg-bg/60 px-4 py-3.5 font-body text-sm text-text placeholder:text-muted/60 transition-all focus:border-accent focus:bg-surface focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                        {errors.name && (
                          <p className="mt-1.5 font-mono-custom text-xs text-accent">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="font-mono-custom text-[11px] text-muted uppercase tracking-wider block mb-2 font-semibold"
                        >
                          {c.stepEmail}
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder={c.emailPlaceholder}
                          {...register("email")}
                          className="w-full rounded-2xl border border-border/80 bg-bg/60 px-4 py-3.5 font-body text-sm text-text placeholder:text-muted/60 transition-all focus:border-accent focus:bg-surface focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                        {errors.email && (
                          <p className="mt-1.5 font-mono-custom text-xs text-accent">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="font-mono-custom text-[11px] text-muted uppercase tracking-wider block mb-2 font-semibold"
                        >
                          {c.stepCompany}
                        </label>
                        <input
                          id="company"
                          type="text"
                          placeholder={c.companyPlaceholder}
                          {...register("company")}
                          className="w-full rounded-2xl border border-border/80 bg-bg/60 px-4 py-3.5 font-body text-sm text-text placeholder:text-muted/60 transition-all focus:border-accent focus:bg-surface focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Project Summary & Interactive Prompt Suggestions */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[#0E0E10] font-mono-custom text-[11px] font-bold">
                          4
                        </span>
                        <label
                          htmlFor="message"
                          className="font-mono-custom text-xs text-text uppercase tracking-wider font-bold"
                        >
                          {c.stepMessage}
                        </label>
                      </div>
                      <span className="font-mono-custom text-[11px] text-muted">
                        Markdown &amp; Links Supported
                      </span>
                    </div>

                    {/* Quick Suggestion Chips */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-mono-custom text-[10px] text-muted uppercase tracking-wider">
                        QUICK PROMPTS:
                      </span>
                      {quickPromptSuggestions.map((prompt, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleApplyPrompt(prompt)}
                          className="rounded-full border border-border bg-bg/40 px-3 py-1 font-mono-custom text-[11px] text-muted hover:border-accent hover:text-accent transition-colors"
                        >
                          + {prompt}
                        </button>
                      ))}
                    </div>

                    <textarea
                      id="message"
                      rows={5}
                      placeholder={c.messagePlaceholder}
                      {...register("message")}
                      className="w-full rounded-2xl border border-border/80 bg-bg/60 px-4 py-3.5 font-body text-sm text-text placeholder:text-muted/60 transition-all focus:border-accent focus:bg-surface focus:outline-none focus:ring-1 focus:ring-accent resize-none leading-relaxed"
                    />
                    {errors.message && (
                      <p className="mt-1.5 font-mono-custom text-xs text-accent">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submission Footer Bar */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/60">
                    <div className="flex items-center gap-2.5 font-mono-custom text-xs text-muted">
                      <ShieldCheck className="h-4 w-4 text-accent" />
                      <span>{c.assurance}</span>
                    </div>

                    <Button
                      type="submit"
                      variant="pill"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-4 font-bold text-sm shadow-xl shadow-accent/20"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2.5">
                          <span className="h-4 w-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                          <span>{c.sendingBtn}</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2.5">
                          <span>{c.submitBtn}</span>
                          <Send className="h-4 w-4 stroke-[2.2]" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </main>
        </div>
      </Container>
    </div>
  );
}
