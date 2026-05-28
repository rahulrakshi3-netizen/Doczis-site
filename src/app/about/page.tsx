"use client";

import { motion } from "framer-motion";
import { Shield, Github, Mail, FileText, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
  return (
    <>
      <section style={{
        paddingTop: 140,
        paddingBottom: 60,
        textAlign: "center",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(79,70,229,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative" }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, marginBottom: 16 }}
          >
            About <span className="gradient-text">DOCZIS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}
          >
            DOCZIS is a privacy-focused, offline-first document management app built for Android.
            We believe your documents should stay on your device — always.
          </motion.p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              maxWidth: 680,
              margin: "0 auto",
              padding: "40px 36px",
              borderRadius: "var(--radius)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              position: "relative",
            }}
          >
            <div style={{
              fontSize: 60,
              lineHeight: 1,
              color: "var(--primary-light)",
              opacity: 0.15,
              position: "absolute",
              top: 12,
              left: 16,
              fontFamily: "serif",
              userSelect: "none",
              pointerEvents: "none",
            }}>&ldquo;</div>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: 15,
              lineHeight: 1.8,
              fontStyle: "italic",
              marginBottom: 20,
            }}>
              DOCZIS was built because I was tired of the same struggle &mdash; jumping between a dozen websites
              and apps, each with its own ads, its own login wall, its own &ldquo;upgrade to pro&rdquo; nag screen.
              Every tool does one thing and forces you through a maze of pop-ups.
            </p>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: 15,
              lineHeight: 1.8,
              fontStyle: "italic",
              marginBottom: 20,
            }}>
              So I built the tool I wished existed. One app. Offline. No accounts. No ads. No data leaving your phone.
              Just honest, fast document tools that respect your time and your privacy.
            </p>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: 15,
              lineHeight: 1.8,
              fontStyle: "italic",
              marginBottom: 0,
            }}>
              This isn&apos;t a startup. This isn&apos;t a business. This is a fix.
            </p>
            <div style={{
              marginTop: 16,
              paddingTop: 16,
              borderTop: "1px solid var(--border)",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--text-primary)",
            }}>
              &mdash; Rahul
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                padding: 32,
                borderRadius: "var(--radius)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <Shield size={28} color="var(--primary-light)" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Our Mission</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>
                To provide a powerful, privacy-first document management solution that works entirely offline.
                No cloud uploads, no data collection, no subscription fees — just reliable tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                padding: 32,
                borderRadius: "var(--radius)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <Github size={28} color="var(--primary-light)" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Open Source</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>
                DOCZIS is open source under the MIT License. We believe in transparency and community-driven
                development. Check out our code, contribute, or fork it on GitHub.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                padding: 32,
                borderRadius: "var(--radius)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <FileText size={28} color="var(--primary-light)" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Technology</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>
                Built with Kotlin, Jetpack Compose & Material 3, Room Database, Apache PDFBox,
                and Google ML Kit. Modern architecture for a modern document experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" id="privacy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              padding: 40,
              borderRadius: "var(--radius)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Privacy Policy</h2>
            <div style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 16 }}>
              <p>
                <strong style={{ color: "var(--text-primary)" }}>Data Collection:</strong> DOCZIS does not collect,
                store, or transmit any personal data. All document processing happens entirely on your device.
              </p>
              <p>
                <strong style={{ color: "var(--text-primary)" }}>Internet Access:</strong> DOCZIS requires no internet
                permission. The app functions completely offline with no network calls.
              </p>
              <p>
                <strong style={{ color: "var(--text-primary)" }}>File Storage:</strong> Documents are processed and saved
                locally on your device. You have full control over all your files.
              </p>
              <p>
                <strong style={{ color: "var(--text-primary)" }}>Third-Party Services:</strong> The app uses Google ML Kit
                for OCR text recognition, which processes images entirely on-device with no data sent to servers.
              </p>
              <p>
                <strong style={{ color: "var(--text-primary)" }}>Contact:</strong> If you have any questions about this
                privacy policy, please reach out via the contact information below.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <h2 className="gradient-text" style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, marginBottom: 16 }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 500, margin: "0 auto" }}>
              Everything you need to know about DOCZIS.
            </p>
          </motion.div>

          <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { q: "Is DOCZIS completely free?", a: "Yes! DOCZIS is 100% free with no hidden costs, subscriptions, or in-app purchases. All features are available without any paywall." },
              { q: "Does DOCZIS require internet?", a: "No. DOCZIS works entirely offline. No internet connection is needed for any feature. Your documents never leave your device." },
              { q: "What Android version do I need?", a: "DOCZIS supports Android 8.0 (API 26) and above. We recommend Android 12+ for the best experience with Material 3 design." },
              { q: "Are my documents safe?", a: "Absolutely. All processing happens on your device. DOCZIS has no internet permission — it cannot upload or transmit your files anywhere. Plus, you can password-protect PDFs with AES-256 encryption." },
              { q: "Can I use DOCZIS on tablets?", a: "Yes. DOCZIS is fully optimized for both phones and tablets with adaptive layouts that make use of larger screens." },
              { q: "How do I report a bug or request a feature?", a: "Open an issue on our GitHub repository or email us at doczis.app@gmail.com. We actively respond to community feedback." },
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              padding: "60px 40px",
              borderRadius: 24,
              background: "linear-gradient(135deg, rgba(79,70,229,0.1), rgba(124,58,237,0.1))",
              border: "1px solid rgba(79,70,229,0.2)",
            }}
          >
            <Mail size={36} color="var(--primary-light)" style={{ marginBottom: 16 }} />
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Get In Touch</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: 24, maxWidth: 400, margin: "0 auto 24px" }}>
              Have questions, suggestions, or feedback? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:doczis.app@gmail.com"
              style={{
                color: "var(--primary-light)",
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              doczis.app@gmail.com
            </a>
            <div style={{ marginTop: 16 }}>
              <a
                href="https://github.com/rahulrakshi3-netizen/Doczis"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={18} /> GitHub Repository
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      style={{
        borderRadius: "var(--radius)",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "18px 20px",
          border: "none",
          background: "none",
          color: "var(--text-primary)",
          fontSize: 15,
          fontWeight: 600,
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {question}
        <ChevronDown
          size={18}
          style={{
            flexShrink: 0,
            color: "var(--text-secondary)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p style={{
          padding: "0 20px 18px",
          color: "var(--text-secondary)",
          fontSize: 14,
          lineHeight: 1.7,
          margin: 0,
        }}>
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}
