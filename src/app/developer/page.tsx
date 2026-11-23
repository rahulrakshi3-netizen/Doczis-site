import type { Metadata } from "next";
import Link from "next/link";
import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.developer.name} - Developer of DOCZIS`,
  description: `${siteConfig.developer.name} is the developer of DOCZIS. ${siteConfig.developer.bio} View the official portfolio at ${siteConfig.developer.portfolioUrl}.`,
  alternates: {
    canonical: "/developer",
  },
  openGraph: {
    title: `${siteConfig.developer.name} - Developer of DOCZIS`,
    description: siteConfig.developer.bio,
    url: "/developer",
    type: "profile",
  },
};

const faqs = [
  {
    question: "Who developed DOCZIS?",
    answer: `DOCZIS was developed by ${siteConfig.developer.name}, an Android and full-stack developer from Bangalore, India.`,
  },
  {
    question: "What is the DOCZIS developer's portfolio?",
    answer: `The official portfolio of ${siteConfig.developer.name} is ${siteConfig.developer.portfolioUrl}.`,
  },
  {
    question: "Where is the DOCZIS source code?",
    answer: `The DOCZIS source code is available on GitHub at ${siteConfig.repoUrl}.`,
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function DeveloperPage() {
  return (
    <>
      <script
        id="developer-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section style={{
        paddingTop: 160,
        paddingBottom: 80,
        position: "relative",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(79,70,229,0.14) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative" }}>
          <p style={{
            color: "var(--primary-light)",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Developer profile
          </p>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 900, marginBottom: 20 }}>
            {siteConfig.developer.name}
          </h1>
          <p style={{
            color: "var(--text-secondary)",
            fontSize: 18,
            maxWidth: 700,
            margin: "0 auto 16px",
            lineHeight: 1.7,
          }}>
            Developer of <span className="gradient-text">DOCZIS</span> — the privacy-first, offline document hub for Android.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 32 }}>
            {siteConfig.developer.role} · {siteConfig.developer.location}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <a
              href={siteConfig.developer.portfolioUrl}
              target="_blank"
              rel="me noopener noreferrer"
              className="btn-primary"
            >
              <Globe size={18} /> Official portfolio
            </a>
            <a
              href={siteConfig.developer.githubUrl}
              target="_blank"
              rel="me noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={siteConfig.developer.linkedInUrl}
              target="_blank"
              rel="me noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={`mailto:${siteConfig.developer.email}`} className="btn-secondary">
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "40px 36px",
            borderRadius: "var(--radius)",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20 }}>About the developer</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.9, marginBottom: 16 }}>
              {siteConfig.developer.bio}
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.9, marginBottom: 0 }}>
              DOCZIS is built with Kotlin, Material 3, Room Database, Apache PDFBox, and Google ML Kit.
              It works fully offline, with no ads, no accounts, and no data leaving your device.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: 40,
            borderRadius: "var(--radius)",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24 }}>Official links</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Portfolio", href: siteConfig.developer.portfolioUrl },
                { label: "GitHub profile", href: siteConfig.developer.githubUrl },
                { label: "DOCZIS source repository", href: siteConfig.repoUrl },
                { label: "LinkedIn", href: siteConfig.developer.linkedInUrl },
                { label: "Personal email", href: `mailto:${siteConfig.developer.email}` },
                { label: "DOCZIS support email", href: `mailto:${siteConfig.developer.appEmail}` },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  style={{
                    color: "var(--primary-light)",
                    fontSize: 15,
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                    overflowWrap: "anywhere",
                  }}
                >
                  {link.label}: {link.href.replace("mailto:", "")}
                </a>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/about" style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                ← Back to About DOCZIS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, textAlign: "center" }}>
              Frequently asked questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  style={{
                    padding: 24,
                    borderRadius: 16,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{faq.question}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
