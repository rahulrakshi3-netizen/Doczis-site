"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { downloadApk } from "@/lib/download";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="glass-card" style={{
      position: "fixed",
      top: 16,
      left: "50%",
      transform: "translateX(-50%)",
      width: "calc(100% - 32px)",
      maxWidth: 1200,
      zIndex: 50,
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: "linear-gradient(135deg, var(--primary), var(--secondary))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 800,
          color: "white",
        }}>
          D
        </div>
        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px" }}>
          DOCZIS
        </span>
      </Link>

      <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <div className="desktop-nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "var(--text-secondary)",
                fontSize: 15,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={downloadApk}
          className="btn-primary desktop-download-btn"
          style={{ padding: "10px 20px", fontSize: 14 }}
        >
          <FileText size={16} />
          Get the App
        </button>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <AnimatedThemeToggler
          variant="circle"
          duration={500}
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "transparent",
            color: "var(--text-secondary)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "color 0.2s",
          }}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
            padding: 4,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 16,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ color: "var(--text-secondary)", fontSize: 15, padding: "8px 0" }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 8, borderTop: "1px solid var(--border)", marginTop: 4 }}>
            <AnimatedThemeToggler
              variant="circle"
              duration={500}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--text-secondary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>Theme</span>
          </div>
          <button
            onClick={downloadApk}
            className="btn-primary"
            style={{ textAlign: "center", marginTop: 8, width: "100%" }}
          >
            Get the App
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-links { display: none !important; }
          .desktop-download-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
