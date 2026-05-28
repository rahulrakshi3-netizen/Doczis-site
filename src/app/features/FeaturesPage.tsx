"use client";

import { motion } from "framer-motion";
import { downloadApk } from "@/lib/download";
import {
  Image,
  FileText,
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
  CheckCircle,
} from "lucide-react";

const categories = [
  {
    title: "Convert & Create",
    features: [
      {
        icon: Image,
        name: "Image to PDF",
        desc: "Select multiple images from your gallery and convert them into a single, well-formatted PDF document. Images are automatically scaled and centered on A4-sized pages.",
        details: ["Batch image selection", "A4 page formatting", "Ordered output"],
      },
      {
        icon: FileText,
        name: "Convert (PDF to Images)",
        desc: "Open any PDF and export selected pages as high-quality JPEG or PNG images. Perfect for sharing individual pages or extracting visual content.",
        details: ["JPEG & PNG support", "Page-by-page selection", "Saved to Downloads/Doczis/Convert/"],
      },
      {
        icon: Scan,
        name: "OCR Scanner (Image to Text)",
        desc: "Powered by Google ML Kit, extract text from images with high accuracy. Copy recognized text to clipboard or save as a .txt file.",
        details: ["Google ML Kit OCR", "Copy to clipboard", "Save as .txt file"],
      },
    ],
  },
  {
    title: "Organize Pages",
    features: [
      {
        icon: Shuffle,
        name: "Reorder Pages",
        desc: "View page thumbnails and drag-and-drop to rearrange them in any order. Save the reorganized PDF instantly.",
        details: ["Drag-and-drop interface", "Visual thumbnails", "Instant save"],
      },
      {
        icon: Trash2,
        name: "Delete Pages",
        desc: "Select unwanted pages from a visual thumbnail view and remove them with a single tap. Clean up your documents effortlessly.",
        details: ["Multi-page selection", "Visual preview", "Safe deletion"],
      },
      {
        icon: Split,
        name: "Split PDF",
        desc: "Extract specific pages from a PDF and save them as individual files. Ideal for splitting large documents into smaller, manageable parts.",
        details: ["Selective page extraction", "Individual file output", "Organized in Downloads/Doczis/Split/"],
      },
      {
        icon: Combine,
        name: "Merge PDFs",
        desc: "Select multiple PDF documents from your device and combine all their pages into a single unified PDF file.",
        details: ["Multi-file selection", "Preserved page order", "Organized output"],
      },
    ],
  },
  {
    title: "Optimize",
    features: [
      {
        icon: FileMinus2,
        name: "Compress",
        desc: "Reduce PDF and image file sizes without significant quality loss. For PDFs, uses lower resolution rendering. For images, applies quality reduction to meet target size.",
        details: ["PDF & image support", "Target size selection", "Quality optimization"],
      },
    ],
  },
  {
    title: "Security",
    features: [
      {
        icon: Lock,
        name: "Protect PDF (Lock)",
        desc: "Add AES-256 encryption to your PDFs. Restrict modification, content extraction, annotation, and form filling while allowing printing.",
        details: ["AES-256 encryption", "Custom password", "Fine-grained permissions"],
      },
      {
        icon: Unlock,
        name: "Unprotect PDF (Unlock)",
        desc: "Remove password protection from encrypted PDFs by providing the correct password. Regain full access to your documents.",
        details: ["Password removal", "Preserves content", "Simple process"],
      },
      {
        icon: Brush,
        name: "Watermark",
        desc: "Add custom text watermarks to every page of your PDF. Choose opacity and position (top-left, top-right, bottom-left, bottom-right, center).",
        details: ["Custom text", "Adjustable opacity", "5 position options"],
      },
      {
        icon: PenTool,
        name: "Sign PDF",
        desc: "Draw your signature on a touch-enabled signature pad and place it at the bottom-right corner of every page. No printing or scanning needed.",
        details: ["Touch signature pad", "Auto-placement", "Digital workflow"],
      },
    ],
  },
];

export default function FeaturesPage() {
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
            Powerful <span className="gradient-text">Features</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 600, margin: "0 auto" }}
          >
            Everything you need to manage, edit, secure, and convert your documents — all offline.
          </motion.p>
        </div>
      </section>

      {categories.map((category, catIdx) => (
        <section key={catIdx} className="section" style={{ paddingTop: 40, paddingBottom: 80 }}>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 24, fontWeight: 700, marginBottom: 32, color: "var(--primary-light)" }}
            >
              {category.title}
            </motion.h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {category.features.map((feature, featIdx) => (
                <motion.div
                  key={featIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: featIdx * 0.1 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 20,
                    padding: 28,
                    borderRadius: "var(--radius)",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    alignItems: "start",
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(79,70,229,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <feature.icon size={24} color="var(--primary-light)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{feature.name}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
                      {feature.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {feature.details.map((detail, dIdx) => (
                        <span
                          key={dIdx}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            padding: "4px 10px",
                            borderRadius: 6,
                            background: "rgba(79,70,229,0.1)",
                            color: "var(--primary-light)",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          <CheckCircle size={12} />
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="section" style={{ paddingTop: 20, paddingBottom: 100 }}>
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
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, marginBottom: 12 }}>
              Start Using DOCZIS Today
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: 28, maxWidth: 450, margin: "0 auto 28px" }}>
              Download the app and experience the most comprehensive offline document toolkit for Android.
            </p>
            <button onClick={downloadApk} className="btn-primary">
              Download Now
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
