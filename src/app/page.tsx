"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Image,
  Scan,
  Shuffle,
  Trash2,
  Split,
  Combine,
  FileMinus2,
  Lock,
  Unlock,
  Brush,
  PenTool,
  ArrowRight,
  Shield,
  Zap,
  Smartphone,
  Download,
} from "lucide-react";
import Link from "next/link";
import AppScreenshots from "@/components/AppScreenshots";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { downloadApk } from "@/lib/download";

const stats = [
  { number: "12+", label: "Professional Tools" },
  { number: "100%", label: "Offline Processing" },
  { number: "AES-256", label: "Encryption Standard" },
  { number: "Free", label: "No Hidden Costs" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 0 80px",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(79,70,229,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 100,
              background: "rgba(79,70,229,0.15)",
              border: "1px solid rgba(79,70,229,0.3)",
              color: "var(--primary-light)",
              fontSize: 14,
              fontWeight: 500,
              marginBottom: 24,
            }}>
              <Zap size={14} />
              Now Available for Android
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ marginBottom: 12 }}
          >
            <h1 style={{
              fontSize: "clamp(56px, 12vw, 120px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-3px",
              marginBottom: 8,
            }}>
              DOCZIS
            </h1>
            <p style={{
              fontSize: "clamp(18px, 3vw, 28px)",
              fontWeight: 600,
              color: "var(--text-secondary)",
              letterSpacing: "-0.5px",
            }}>
              <span className="gradient-text">Smart Document</span> Hub
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: 40,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            The ultimate offline toolkit for PDFs and documents. Convert, edit, merge, split, secure,
            and organize your files — all on your device, no server needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/features" className="btn-outline-light">
              Explore Features <ArrowRight size={18} />
            </Link>
            <RainbowButton asChild>
              <a href="/api/download" download>
                <Download size={18} /> Download Now
              </a>
            </RainbowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              marginTop: 60,
              display: "flex",
              justifyContent: "center",
              gap: 48,
              flexWrap: "wrap",
            }}
          >
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 28,
                  fontWeight: 800,
                  background: "linear-gradient(135deg, var(--primary-light), var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <AppScreenshots />

      {/* Why DOCZIS */}
      <section className="section">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
            alignItems: "center",
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>
                Why Choose <span className="gradient-text">DOCZIS</span>?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: Shield, title: "100% Offline", desc: "All processing happens on your device. No internet, no servers, no uploads." },
                  { icon: Zap, title: "Blazing Fast", desc: "Optimized for performance. Process documents in seconds, not minutes." },
                  { icon: Smartphone, title: "Beautiful Design", desc: "Material 3 design with smooth animations and dark mode support." },
                  { icon: Lock, title: "Privacy First", desc: "Your documents never leave your device. AES-256 encryption for sensitive files." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(79,70,229,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <item.icon size={20} color="var(--primary-light)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: "linear-gradient(135deg, rgba(79,70,229,0.1), rgba(124,58,237,0.1))",
                borderRadius: 20,
                padding: 40,
                border: "1px solid rgba(79,70,229,0.2)",
                textAlign: "center",
              }}
            >
              <div style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: 36,
                fontWeight: 900,
                color: "white",
              }}>
                D
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>DOCZIS v1.0</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
                Built with Kotlin, Material 3, and a focus on privacy. 
                Available now for Android 8.0+.
              </p>
              <button onClick={downloadApk} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                <Download size={18} /> Download APK
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              padding: "80px 40px",
              borderRadius: 24,
              background: "linear-gradient(135deg, rgba(79,70,229,0.1), rgba(124,58,237,0.1))",
              border: "1px solid rgba(79,70,229,0.2)",
            }}
          >
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, marginBottom: 16 }}>
              Ready to Take Control of Your Documents?
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.6 }}>
              Join thousands of users who trust DOCZIS for their document management needs. 
              Download now and experience the power of offline document processing.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={downloadApk} className="btn-primary">
                <Download size={18} /> Download for Android
              </button>
              <Link href="/features" className="btn-secondary">
                View All Features <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
