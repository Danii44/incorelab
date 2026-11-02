"use client";

import React, { useState } from "react";
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
}

const budgetTiers: BudgetTier[] = [
  {
    id: "tier-1",
    aed: "AED 5,000 - 15,000",
    usd: "$1,400 - $4,000 USD",
    labelEn: "Sprint / MVP / Tool",
    labelAr: "سبرنت / نموذج أولي / أداة",
    subEn: "Landing pages, Framer setups, focused automations",
    subAr: "صفحات الهبوط، مواقع سريعة، وأتمتة محددة",
  },
  {
    id: "tier-2",
    aed: "AED 15,000 - 35,000",
    usd: "$4,000 - $9,500 USD",
    labelEn: "Custom Web / Shopify",
    labelAr: "موقع مخصص / متجر شوبيفاي",
    subEn: "Next.js marketing websites, custom Shopify stores",
    subAr: "مواقع مخصصة بـ Next.js، ومتاجر شوبيفاي المتطورة",
  },
  {
    id: "tier-3",
    aed: "AED 35,000 - 75,000",
    usd: "$9,500 - $20,000 USD",
    labelEn: "Full Platform & Mobile",
    labelAr: "منصة ويب متكاملة وتطبيق جوال",
    subEn: "React Native apps, 3D WebGL, full-stack portals",
    subAr: "تطبيقات React Native، عوالم 3D، وبوابات متكاملة",
  },
  {
    id: "tier-4",
    aed: "AED 75,000+",
    usd: "$20,000+ USD",
    labelEn: "Large Enterprise System",
    labelAr: "أنظمة وبوابات مؤسسية ضخمة",
    subEn: "Multi-vendor systems, ERP platforms, heavy scale",
    subAr: "أنظمة متعددة المتاجر، منصات ERP، وتوسعات ضخمة",
  },
];

interface ServiceChoice {
  id: string;
  nameEn: string;
  nameAr: string;
  category: string;
}

const serviceChoices: ServiceChoice[] = [
  { id: "web-dev", nameEn: "Next.js & React Web Apps", nameAr: "تطبيقات الويب (Next.js & React)", category: "WEB" },
  { id: "ecom", nameEn: "Custom Shopify & Headless", nameAr: "متاجر شوبيفاي المخصصة والهيدلس", category: "COMMERCE" },
  { id: "mobile", nameEn: "iOS & Android Apps (React Native)", nameAr: "تطبيقات الجوال (iOS & Android)", category: "MOBILE" },
  { id: "framer", nameEn: "Framer & Webflow Sites", nameAr: "مواقع فريمر وويب فلو السريعة", category: "WEB" },
  { id: "webgl", nameEn: "3D WebGL & Interactive Visuals", nameAr: "تجارب ثلاثية الأبعاد 3D WebGL", category: "SPATIAL" },
  { id: "branding", nameEn: "Branding & Figma Design Systems", nameAr: "الهوية البصرية وتصاميم فيجما", category: "DESIGN" },
  { id: "ai", nameEn: "Applied AI & Automation Pipelines", nameAr: "حلول الذكاء الاصطناعي والأتمتة", category: "AI" },
  { id: "growth", nameEn: "Technical SEO & Growth Funnels", nameAr: "التهيئة لمحركات البحث وتحسين التحويل", category: "GROWTH" },
  { id: "cloud", nameEn: "AWS, Cloudflare & DevOps Hosting", nameAr: "البنية السحابية وإدارة الخوادم", category: "CLOUD" },
];

export default function ContactPage() {
  const { t, currency, isRTL } = useLocale();
  const c = t.contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [apiError, setApiError] = useState("");
  const [copied, setCopied] = useState(false);


  const defaultBudgetText =
    currency === "AED"
      ? `${budgetTiers[1].aed} (~${budgetTiers[1].usd})`
      : `${budgetTiers[1].usd} (~${budgetTiers[1].aed})`;

  const {
    register,
    handleSubmit,
    control,
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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact@incorelab.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // ignore
    }
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
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-36 overflow-hidden min-h-screen">
      {/* Background Layer 1: Directional Sunlight Caustic */}
      <div
        className="pointer-events-none absolute inset-0 z-[0] select-none opacity-20 dark:opacity-35 mix-blend-soft-light dark:mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/architectural-sunlight-caustic.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Background Layer 2: Subtle Swiss Studio Datum Plate Watermark */}
      <div
        className="pointer-events-none absolute -right-24 top-24 w-[600px] h-[600px] z-[0] select-none opacity-10 dark:opacity-20 mix-blend-screen"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/studio-spec-plate.png"
          alt=""
          fill
          className="object-contain"
          sizes="600px"
        />
      </div>

      {/* Background Layer 3: Warm Accent Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 blur-[140px] z-[0]" />

      <Container size="fluid" className="relative z-10">
        {/* Top Header Block */}
        <div className="border-b border-border pb-12 sm:pb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1 font-mono-custom text-xs text-accent backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{c.tag}</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono-custom text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{c.replyTime}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-display headline-huge font-bold uppercase tracking-tight text-text">
                {c.title}
              </h1>
              <p className="mt-4 max-w-2xl font-body text-base sm:text-lg text-text/85 leading-relaxed">
                {c.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/971588741441"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 font-mono-custom text-xs text-accent font-semibold hover:bg-accent hover:text-white dark:hover:text-[#0E0E10] transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>{c.quickChat}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-14 sm:pt-16">
          {/* Left Column: Direct Studio Hub (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Direct Connect Options */}
            <div className="rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-md shadow-sm flex flex-col gap-5">
              <span className="font-mono-custom text-xs text-muted tracking-wider uppercase font-semibold">
                {c.directChannels}
              </span>

              {/* Email with 1-click copy */}
              <div>
                <span className="font-mono-custom text-[11px] text-muted block mb-1.5">
                  {c.emailUs}
                </span>
                <div className="flex items-center justify-between gap-2 rounded-xl border border-border bg-bg/60 p-3">
                  <a
                    href="mailto:contact@incorelab.com"
                    className="font-display text-base font-bold text-text hover:text-accent transition-colors truncate"
                  >
                    contact@incorelab.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:border-accent hover:text-accent transition-colors flex-shrink-0"
                    title="Copy email"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-accent stroke-[2.5]" />
                    ) : (
                      <Copy className="h-4 w-4 stroke-[1.8]" />
                    )}
                  </button>
                </div>
                {copied && (
                  <span className="font-mono-custom text-[11px] text-accent mt-1.5 block">
                    {c.copied}
                  </span>
                )}
              </div>

              {/* Phone & WhatsApp */}
              <div>
                <span className="font-mono-custom text-[11px] text-muted block mb-1.5">
                  {c.phoneWhatsapp}
                </span>
                <a
                  href="https://wa.me/971588741441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-bg/60 p-3 hover:border-accent group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-mono-custom text-xs font-semibold text-text group-hover:text-accent transition-colors">
                      +971 58 874 1441
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-border/50">
                <span className="font-mono-custom text-[11px] text-muted block mb-2">
                  SOCIALS
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.instagram.com/incorelab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 font-mono-custom text-xs text-text hover:border-accent hover:text-accent transition-colors"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61594459311127"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 font-mono-custom text-xs text-text hover:border-accent hover:text-accent transition-colors"
                  >
                    <span>Facebook</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <a
                    href="https://wa.me/971588741441"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 font-mono-custom text-xs text-text hover:border-accent hover:text-accent transition-colors"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Our Commitments / Guarantees Card */}
            <div className="rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-md shadow-sm">
              <span className="font-mono-custom text-xs text-muted tracking-wider uppercase font-semibold block mb-4">
                {c.whatToExpect}
              </span>
              <ul className="flex flex-col gap-3 font-mono-custom text-xs text-muted">
                {c.promises.map((promise, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-accent stroke-[3] flex-shrink-0 mt-0.5" />
                    <span>{promise}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy & NDA Badge */}
            <div className="rounded-xl border border-border/80 bg-surface/50 p-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent flex-shrink-0">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <p className="font-body text-xs text-muted leading-relaxed">
                {c.confidentiality}
              </p>
            </div>
          </div>

          {/* Right Column: Project Brief Form (Cols 5-12) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-accent/40 bg-surface/85 p-8 sm:p-14 text-center backdrop-blur-xl shadow-xl"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-[#0E0E10] shadow-lg shadow-accent/20">
                    <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
                  </div>

                  <span className="font-mono-custom text-xs text-accent tracking-widest uppercase block mb-2 font-semibold">
                    MESSAGE RECEIVED
                  </span>

                  <h2 className="font-display headline-medium font-bold text-text mb-4">
                    {c.successTitle}
                  </h2>

                  <p className="mx-auto max-w-lg font-body text-base text-muted leading-relaxed mb-8">
                    {c.successMsg}
                  </p>

                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2 font-mono-custom text-xs text-muted mb-8">
                    <span>{c.refCode}</span>
                    <span className="text-accent font-bold">{referenceId}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button
                      type="button"
                      variant="pill"
                      onClick={() => setIsSubmitted(false)}
                    >
                      {c.submitAnother}
                    </Button>
                    <a
                      href="https://wa.me/971588741441"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 py-3 font-mono-custom text-xs text-accent font-bold hover:bg-accent hover:text-[#0E0E10] transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{c.chatNow}</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-8 rounded-3xl border border-border bg-surface/75 p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-xl relative"
                  noValidate
                >
                  {apiError && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 font-mono-custom text-xs text-red-400">
                      {apiError}
                    </div>
                  )}

                  {/* Section 1: Services Picker */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="font-mono-custom text-xs text-text uppercase tracking-wider font-semibold">
                        {c.stepServices}
                      </label>
                      <span className="font-mono-custom text-[11px] text-muted">
                        {c.selectAll}
                      </span>
                    </div>

                    <Controller
                      name="services"
                      control={control}
                      render={({ field }) => (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                          {serviceChoices.map((choice) => {
                            const choiceTitle = isRTL ? choice.nameAr : choice.nameEn;
                            const isSelected = field.value?.includes(choice.nameEn) || field.value?.includes(choice.nameAr);
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
                                className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-left border transition-all duration-200 ${
                                  isSelected
                                    ? "bg-accent text-[#0E0E10] border-accent font-bold shadow-sm shadow-accent/20"
                                    : "border-border bg-bg/50 text-text/85 hover:border-accent/60 hover:bg-surface"
                                }`}
                              >
                                <span className="font-mono-custom text-xs leading-snug">
                                  {choiceTitle}
                                </span>
                                {isSelected ? (
                                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0E0E10]/15 text-[#0E0E10] flex-shrink-0 ml-2">
                                    <Check className="h-3 w-3 stroke-[3]" />
                                  </div>
                                ) : (
                                  <span className="font-mono-custom text-[10px] text-muted flex-shrink-0 ml-2 opacity-60">
                                    {choice.category}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    />
                    {errors.services && (
                      <p className="mt-2 font-mono-custom text-xs text-accent">
                        {errors.services.message}
                      </p>
                    )}
                  </div>

                  {/* Section 2: Budget Tiers (AED & USD) */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="font-mono-custom text-xs text-text uppercase tracking-wider font-semibold">
                        {c.stepBudget} ({currency})
                      </label>
                      <span className="font-mono-custom text-[11px] text-accent font-semibold">
                        {c.fixedMilestones}
                      </span>
                    </div>

                    <Controller
                      name="budget"
                      control={control}
                      render={({ field }) => (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                                className={`rounded-xl p-4 text-left border transition-all duration-200 flex flex-col justify-between ${
                                  isSelected
                                    ? "border-accent bg-accent/10 shadow-sm shadow-accent/15 ring-1 ring-accent"
                                    : "border-border bg-bg/50 hover:border-accent/50 hover:bg-surface"
                                }`}
                              >
                                <div className="flex items-start justify-between gap-2 mb-2">
                                  <div>
                                    <span className="font-display text-base font-bold text-text block">
                                      {primaryAmount}
                                    </span>
                                    <span className="font-mono-custom text-xs text-accent font-semibold">
                                      {secondaryAmount}
                                    </span>
                                  </div>
                                  <div
                                    className={`h-4 w-4 rounded-full border flex items-center justify-center flex-shrink-0 mt-1 ${
                                      isSelected
                                        ? "border-accent bg-accent text-[#0E0E10]"
                                        : "border-border"
                                    }`}
                                  >
                                    {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                                  </div>
                                </div>
                                <div>
                                  <span className="font-mono-custom text-xs font-semibold text-text block">
                                    {tierLabel}
                                  </span>
                                  <span className="font-body text-[11px] text-muted line-clamp-1">
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
                      <p className="mt-2 font-mono-custom text-xs text-accent">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>

                  {/* Section 3: Contact Inputs (Name, Email, Company) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="font-mono-custom text-xs text-text uppercase tracking-wider block mb-2 font-semibold"
                      >
                        {c.stepName}
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder={c.namePlaceholder}
                        {...register("name")}
                        className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3.5 font-body text-sm text-text placeholder:text-muted/60 transition-all focus:border-accent focus:bg-surface focus:outline-none focus:ring-1 focus:ring-accent"
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
                        className="font-mono-custom text-xs text-text uppercase tracking-wider block mb-2 font-semibold"
                      >
                        {c.stepEmail}
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder={c.emailPlaceholder}
                        {...register("email")}
                        className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3.5 font-body text-sm text-text placeholder:text-muted/60 transition-all focus:border-accent focus:bg-surface focus:outline-none focus:ring-1 focus:ring-accent"
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
                        className="font-mono-custom text-xs text-muted uppercase tracking-wider block mb-2 font-semibold"
                      >
                        {c.stepCompany}
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder={c.companyPlaceholder}
                        {...register("company")}
                        className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3.5 font-body text-sm text-text placeholder:text-muted/60 transition-all focus:border-accent focus:bg-surface focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {/* Section 4: Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="font-mono-custom text-xs text-text uppercase tracking-wider block mb-2 font-semibold"
                    >
                      {c.stepMessage}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder={c.messagePlaceholder}
                      {...register("message")}
                      className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3.5 font-body text-sm text-text placeholder:text-muted/60 transition-all focus:border-accent focus:bg-surface focus:outline-none focus:ring-1 focus:ring-accent resize-none leading-relaxed"
                    />
                    {errors.message && (
                      <p className="mt-1.5 font-mono-custom text-xs text-accent">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button & Assurance */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 font-mono-custom text-xs text-muted">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span>{c.assurance}</span>
                    </div>

                    <Button
                      type="submit"
                      variant="pill"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-4 font-bold"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full border-2 border-black border-t-transparent animate-spin" />
                          <span>{c.sendingBtn}</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>{c.submitBtn}</span>
                          <Send className="h-4 w-4 stroke-[2]" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
}
