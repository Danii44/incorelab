"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, Currency, translations, TranslationDict } from "@/data/translations";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  isRTL: boolean;
  t: TranslationDict;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const GULF_TIMEZONES = [
  "Asia/Dubai",
  "Asia/Muscat",
  "Asia/Riyadh",
  "Asia/Qatar",
  "Asia/Bahrain",
  "Asia/Kuwait",
];

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [currency, setCurrencyState] = useState<Currency>("AED");

  useEffect(() => {
    // 1. Check URL query params first (for direct links & crawlers)
    let initialLocale: Locale = "en";
    let initialCurrency: Currency = "AED";

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryLang = urlParams.get("lang")?.toLowerCase();
      const queryCurr = urlParams.get("currency")?.toUpperCase();

      if (queryLang === "ar" || queryLang === "en") {
        initialLocale = queryLang;
      } else {
        // 2. Check localStorage
        const savedLocale = localStorage.getItem("incorelab_locale") as Locale | null;
        if (savedLocale && (savedLocale === "en" || savedLocale === "ar")) {
          initialLocale = savedLocale;
        } else {
          // 3. Auto-detect browser language
          const userLang = (navigator.language || "").toLowerCase();
          if (userLang.startsWith("ar")) {
            initialLocale = "ar";
          }
        }
      }

      if (queryCurr === "AED" || queryCurr === "USD") {
        initialCurrency = queryCurr;
      } else {
        // 2. Check localStorage
        const savedCurrency = localStorage.getItem("incorelab_currency") as Currency | null;
        if (savedCurrency && (savedCurrency === "AED" || savedCurrency === "USD")) {
          initialCurrency = savedCurrency;
        } else {
          // 3. Auto-detect region timezone
          const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (GULF_TIMEZONES.includes(userTimezone) || initialLocale === "ar") {
            initialCurrency = "AED";
          } else {
            initialCurrency = "USD";
          }
        }
      }
    } catch {
      initialCurrency = "AED";
    }

    queueMicrotask(() => {
      setLocaleState(initialLocale);
      setCurrencyState(initialCurrency);
    });

    // Apply document direction and language attribute
    document.documentElement.dir = initialLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = initialLocale;
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("incorelab_locale", newLocale);
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLocale;
  };

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("incorelab_currency", newCurrency);
  };

  const isRTL = locale === "ar";
  const t = translations[locale];

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        currency,
        setCurrency,
        isRTL,
        t,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
