import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalyticsPageView } from "@/components/analytics/GoogleAnalyticsPageView";
import { themeInitScript } from "@/lib/theme-script";
import { GA_MEASUREMENT_ID, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Studio digital : sites internet, branding & visibilité`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "agence web",
    "création de site internet",
    "branding",
    "identité de marque",
    "SEO",
    "Google Business Profile",
    "automatisation IA",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — Studio digital`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Studio digital`,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffe9d6" },
    { media: "(prefers-color-scheme: dark)", color: "#120e17" },
  ],
  width: "device-width",
  initialScale: 1,
};

const socialUrls = Object.values(SOCIAL_LINKS).filter(
  (url) => !url.startsWith("[À COMPLÉTER"),
);

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: new URL("/apple-icon", SITE_URL).toString(),
  description: SITE_DESCRIPTION,
  ...(socialUrls.length > 0 ? { sameAs: socialUrls } : {}),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "fr-FR",
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink-700 dark:bg-obsidian dark:text-ink-300">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-100 focus-visible:rounded-full focus-visible:bg-ink-900 focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-ivory"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === "production" && (
          <>
            <Suspense fallback={null}>
              <GoogleAnalyticsPageView />
            </Suspense>
            <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
          </>
        )}
      </body>
    </html>
  );
}
