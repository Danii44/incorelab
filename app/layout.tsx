import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LocaleProvider } from "@/context/LocaleContext";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/ui/Cursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Preloader } from "@/components/ui/Preloader";
import { PageCurtain } from "@/components/ui/PageCurtain";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jetbrains",
  display: "swap",
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-INCORELAB";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2EFE9" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E10" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "incorelab | Web Development, E-Commerce, Mobile Apps & AI Studio",
    template: "%s | incorelab",
  },
  description:
    "Incorelab is an independent digital studio in Dubai and Zurich. We build fast Next.js web applications, custom Shopify stores, React Native mobile apps, and applied AI workflows.",
  keywords: [
    "web development Dubai",
    "website design Dubai UAE",
    "Next.js agency Dubai",
    "Shopify Plus partner Dubai",
    "ecommerce web design UAE",
    "mobile app development Dubai",
    "React Native agency UAE",
    "AI automation agency Dubai",
    "software development company UAE",
    "Three.js 3D web design",
    "Figma UI UX design studio Dubai",
    "digital agency Zurich",
    "headless commerce studio",
    "technical SEO agency Dubai",
    "Answer Engine Optimization AEO",
    "Generative Engine Optimization GEO",
    "enterprise cloud hosting",
  ],
  authors: [{ name: "Incorelab", url: "https://incorelab.com" }],
  creator: "incorelab",
  metadataBase: new URL("https://incorelab.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/?lang=ar",
      "x-default": "/",
    },
  },
  other: {
    "geo.region": "AE-DU, CH-ZH",
    "geo.placename": "Dubai, Zurich",
    "geo.position": "25.1857;55.2728",
    "ICBM": "25.1857, 55.2728",
    "format-detection": "telephone=no",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_AE"],
    url: "https://incorelab.com",
    title: "incorelab | Web Development, E-Commerce, Mobile Apps & AI Studio",
    description:
      "We design and build fast websites, Shopify stores, mobile apps, and custom AI tools for ambitious brands.",
    siteName: "incorelab",
    images: [
      {
        url: "/images/service-web.svg",
        width: 1200,
        height: 630,
        alt: "incorelab - Digital Studio & Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "incorelab | Web Development, E-Commerce, Mobile Apps & AI Studio",
    description: "Custom Next.js websites, Shopify stores, mobile apps, and AI systems.",
    creator: "@incorelab",
    images: ["/images/service-web.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        {/* Google Tag Manager Script Container */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* JSON-LD Schema Graph for SEO/GEO/AEO */}
        <JsonLd />
      </head>

      <body className="min-h-screen bg-bg text-text antialiased selection:bg-accent selection:text-[#0E0E10]">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LocaleProvider>
            <SmoothScrollProvider>
              <Preloader />
              <NoiseOverlay />
              <Cursor />
              <Navbar />
              <PageCurtain>
                <main id="main-content" className="relative">
                  {children}
                </main>
              </PageCurtain>
              <Footer />
            </SmoothScrollProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
