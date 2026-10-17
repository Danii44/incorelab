export type Locale = "en" | "ar";
export type Currency = "AED" | "USD";

export interface TranslationDict {
  nav: {
    work: string;
    services: string;
    about: string;
    contact: string;
    talk: string;
    menu: string;
  };
  contact: {
    tag: string;
    replyTime: string;
    title: string;
    subtitle: string;
    quickChat: string;
    directChannels: string;
    emailUs: string;
    phoneWhatsapp: string;
    copied: string;
    whatToExpect: string;
    promises: string[];
    confidentiality: string;
    stepServices: string;
    selectAll: string;
    stepBudget: string;
    fixedMilestones: string;
    stepName: string;
    namePlaceholder: string;
    stepEmail: string;
    emailPlaceholder: string;
    stepCompany: string;
    companyPlaceholder: string;
    stepMessage: string;
    messagePlaceholder: string;
    assurance: string;
    submitBtn: string;
    sendingBtn: string;
    successTitle: string;
    successMsg: string;
    refCode: string;
    submitAnother: string;
    chatNow: string;
  };
}

export const translations: Record<Locale, TranslationDict> = {
  en: {
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Contact",
      talk: "Let's talk",
      menu: "Menu Navigation",
    },
    contact: {
      tag: "START A NEW PROJECT",
      replyTime: "AVERAGE REPLY TIME: UNDER 4 HOURS",
      title: "Let's talk.",
      subtitle:
        "Tell us what you want to build. We will review your project and reply with honest feedback, a realistic schedule, and a fixed price within 24 hours.",
      quickChat: "Quick Chat on WhatsApp",
      directChannels: "Direct Channels",
      emailUs: "EMAIL US",
      phoneWhatsapp: "PHONE & WHATSAPP",
      copied: "✓ Email address copied to clipboard",
      whatToExpect: "What You Can Expect",
      promises: [
        "Direct talk with engineers, no sales reps",
        "Clear milestones and fixed prices",
        "You own 100% of the code and design",
        "Under 400ms speed on every page",
      ],
      confidentiality:
        "All client conversations and project details are held in strict confidence under mutual NDA.",
      stepServices: "01 // WHAT SERVICES DO YOU NEED? *",
      selectAll: "Select all that apply",
      stepBudget: "02 // ESTIMATED BUDGET *",
      fixedMilestones: "Fixed Milestone Pricing",
      stepName: "03 // YOUR NAME *",
      namePlaceholder: "e.g. Alex Vance",
      stepEmail: "04 // EMAIL ADDRESS *",
      emailPlaceholder: "e.g. alex@company.com",
      stepCompany: "05 // COMPANY / WEBSITE",
      companyPlaceholder: "e.g. Acme Corp or acme.com",
      stepMessage: "06 // PROJECT SUMMARY & OBJECTIVES *",
      messagePlaceholder:
        "Tell us what you want to build, what needs fixing, your target launch date, or share any existing links...",
      assurance: "NO OBLIGATION · FIXED PRICE PROPOSAL WITHIN 24H",
      submitBtn: "SUBMIT PROJECT BRIEF",
      sendingBtn: "SENDING INQUIRY...",
      successTitle: "Thank you. We will be in touch shortly.",
      successMsg:
        "An engineer is reviewing your project requirements. We will reply by email with initial feedback and schedule notes within 24 hours.",
      refCode: "REFERENCE CODE:",
      submitAnother: "Submit Another Message",
      chatNow: "Chat on WhatsApp Now",
    },
  },
  ar: {
    nav: {
      work: "أعمالنا",
      services: "خدماتنا",
      about: "عن الاستوديو",
      contact: "تواصل معنا",
      talk: "ابدأ مشروعك",
      menu: "قائمة التصفح",
    },
    contact: {
      tag: "ابدأ مشروعاً جديداً",
      replyTime: "متوسط وقت الرد: أقل من 4 ساعات",
      title: "فلنتحدث عن مشروعك.",
      subtitle:
        "أخبرنا عما ترغب في بنائه. سنراجع تفاصيل مشروعك ونرد عليك برأي تقني صريح، وجدول زمني دقيق، وعرض سعر ثابت خلال 24 ساعة.",
      quickChat: "محادثة فورية عبر واتساب",
      directChannels: "قنوات التواصل المباشر",
      emailUs: "البريد الإلكتروني",
      phoneWhatsapp: "الهاتف والواتساب",
      copied: "✓ تم نسخ البريد الإلكتروني بنجاح",
      whatToExpect: "التزاماتنا تجاهك",
      promises: [
        "تواصل مباشر مع كبار المهندسين دون وسطاء",
        "مراحل واضحة وأسعار ثابتة بدون رسوم خفية",
        "ملكية كاملة بنسبة 100% لكافة الأكواد والتصاميم",
        "سرعة تحميل فائقة أقل من 400 مللي ثانية",
      ],
      confidentiality:
        "جميع مناقشات العملاء وتفاصيل المشاريع محمية باتفاقية عدم إفصاح رسمية وقانونية (NDA).",
      stepServices: "01 // ما هي الخدمات التي تحتاجها؟ *",
      selectAll: "اختر كل ما ينطبق",
      stepBudget: "02 // الميزانية التقديرية *",
      fixedMilestones: "تسعير ثابت للمراحل",
      stepName: "03 // اسمك الكريم *",
      namePlaceholder: "مثال: عبد الله المنصوري",
      stepEmail: "04 // البريد الإلكتروني *",
      emailPlaceholder: "مثال: abdullah@company.ae",
      stepCompany: "05 // الشركة أو الموقع الإلكتروني",
      companyPlaceholder: "مثال: شركة الرؤية أو vision.ae",
      stepMessage: "06 // ملخص المشروع وأهدافه *",
      messagePlaceholder:
        "أخبرنا عن فكرة المشروع، التحديات الحالية، الموعد المستهدف للإطلاق، أو أي روابط للمشروع...",
      assurance: "بدون أي التزام مسبق · عرض سعر ثابت خلال 24 ساعة",
      submitBtn: "إرسال تفاصيل المشروع",
      sendingBtn: "جاري الإرسال...",
      successTitle: "شكراً لك. سنتواصل معك في أقرب وقت.",
      successMsg:
        "يقوم أحد مهندسينا بدراسة متطلبات مشروعك حالياً. سنرد عليك عبر البريد الإلكتروني مع الملاحظات الفنية خلال 24 ساعة.",
      refCode: "رمز المرجع:",
      submitAnother: "إرسال رسالة أخرى",
      chatNow: "تحدث معنا عبر واتساب الآن",
    },
  },
};
