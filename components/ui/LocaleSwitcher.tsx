"use client";

import React from "react";
import { useLocale } from "@/context/LocaleContext";

export function LocaleSwitcher() {
  const { locale, setLocale, currency, setCurrency } = useLocale();

  return (
    <div className="flex items-center gap-1.5 font-mono-custom text-xs">
      {/* Currency Switcher */}
      <div className="flex items-center rounded-full border border-border/80 bg-surface/60 p-0.5 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setCurrency("AED")}
          className={`rounded-full px-2.5 py-1 transition-all text-[11px] font-semibold ${
            currency === "AED"
              ? "bg-accent text-[#0E0E10] shadow-sm font-bold"
              : "text-muted hover:text-text"
          }`}
          title="Switch currency to UAE Dirham (AED)"
        >
          AED
        </button>
        <button
          type="button"
          onClick={() => setCurrency("USD")}
          className={`rounded-full px-2.5 py-1 transition-all text-[11px] font-semibold ${
            currency === "USD"
              ? "bg-accent text-[#0E0E10] shadow-sm font-bold"
              : "text-muted hover:text-text"
          }`}
          title="Switch currency to US Dollar (USD)"
        >
          USD
        </button>
      </div>

      {/* Language Switcher */}
      <div className="flex items-center rounded-full border border-border/80 bg-surface/60 p-0.5 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={`rounded-full px-2.5 py-1 transition-all text-[11px] font-semibold ${
            locale === "en"
              ? "bg-accent text-[#0E0E10] shadow-sm font-bold"
              : "text-muted hover:text-text"
          }`}
          title="English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLocale("ar")}
          className={`rounded-full px-2.5 py-1 transition-all text-[11px] font-semibold ${
            locale === "ar"
              ? "bg-accent text-[#0E0E10] shadow-sm font-bold"
              : "text-muted hover:text-text"
          }`}
          title="العربية (Arabic)"
        >
          العربية
        </button>
      </div>
    </div>
  );
}
