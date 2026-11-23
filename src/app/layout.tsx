import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { developerSameAs, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | DOCZIS",
  },
  description: siteConfig.description,
  keywords: [
    "PDF editor",
    "document manager",
    "PDF converter",
    "image to PDF",
    "PDF compressor",
    "merge PDF",
    "split PDF",
    "OCR scanner",
    "PDF security",
    "watermark PDF",
    "Android PDF tools",
    "offline document editor",
    "DOCZIS",
    "Rahul Raj",
    "DOCZIS developer",
  ],
  authors: [{ name: siteConfig.developer.name, url: siteConfig.developer.portfolioUrl }],
  creator: siteConfig.developer.name,
  publisher: siteConfig.developer.name,
  verification: {
    google: "gDZjt2x8sA6ey7pmgJb6Yi2F-uOnA0IOiTkDdN9uKO0",
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DOCZIS - Smart Document Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DOCZIS - Smart Document Hub",
    description: "Powerful offline PDF and document management app for Android.",
    images: ["/images/og-image.png"],
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
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

const developerId = `${siteConfig.url}/#developer`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-US",
      publisher: { "@id": developerId },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}/#app`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Android 8.0+",
      author: { "@id": developerId },
      creator: { "@id": developerId },
      publisher: { "@id": developerId },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Person",
      "@id": developerId,
      name: siteConfig.developer.name,
      url: siteConfig.developer.portfolioUrl,
      email: siteConfig.developer.email,
      jobTitle: siteConfig.developer.role,
      description: siteConfig.developer.bio,
      sameAs: developerSameAs,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="doczis-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light")document.documentElement.classList.add("dark")}catch(e){}})()`
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SplashScreen>
          <Header />
          <main>{children}</main>
          <Footer />
        </SplashScreen>
      </body>
    </html>
  );
}
