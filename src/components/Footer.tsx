"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "clamp(40px, 6vw, 60px) 0 clamp(20px, 3vw, 30px)",
      marginTop: 40,
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "clamp(24px, 4vw, 40px)",
          marginBottom: 40,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: 800,
                color: "white",
              }}>
                D
              </div>
              <span style={{ fontSize: 18, fontWeight: 700 }}>DOCZIS</span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, maxWidth: 320 }}>
              Smart Document Hub — Your all-in-one offline PDF and document management toolkit for Android.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: "var(--text-primary)" }}>Product</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/features" style={{ color: "var(--text-secondary)", fontSize: 14, transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
              >Features</Link>
              <Link href="/about" style={{ color: "var(--text-secondary)", fontSize: 14, transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
              >About</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: "var(--text-primary)" }}>Support</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/about#contact" style={{ color: "var(--text-secondary)", fontSize: 14, transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
              >Contact</Link>
              <Link href="/about#privacy" style={{ color: "var(--text-secondary)", fontSize: 14, transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
              >Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: "var(--text-primary)" }}>Legal</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>MIT License</span>
              <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>Copyright {currentYear}</span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ color: "var(--text-secondary)", fontSize: 13 }}>
            &copy; {currentYear} DOCZIS. All rights reserved.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: 13 }}>
            Built with ❤️ for Android
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
