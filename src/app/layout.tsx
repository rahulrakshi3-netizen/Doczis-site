import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: {
    default: "DOCZIS - Smart Document Hub | PDF Tools & Document Manager",
    template: "%s | DOCZIS",
  },
  description:
    "DOCZIS is a powerful offline PDF and document management app for Android. Convert, edit, merge, split, compress, secure, and organize PDFs with 12+ professional tools. No server required.",
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
  ],
  authors: [{ name: "DOCZIS" }],
  creator: "DOCZIS",
  publisher: "DOCZIS",
  metadataBase: new URL("https://doczis.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DOCZIS",
    title: "DOCZIS - Smart Document Hub | PDF Tools & Document Manager",
    description:
      "Powerful offline PDF and document management app with 12+ professional tools. Convert, edit, merge, split, compress, and secure documents on your Android device.",
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
    description:
      "Powerful offline PDF and document management app for Android.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
