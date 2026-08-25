"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const screenshots = [
  { id: "splash", file: "/images/Splash.jpeg", title: "Splash Screen", desc: "Your first look at DOCZIS" },
  { id: "home", file: "/images/Home.jpeg", title: "Home Dashboard", desc: "Access all tools from one place" },
  { id: "tools", file: "/images/Tools.jpeg", title: "Feature Tools", desc: "Convert, organize, and secure documents" },
  { id: "documents", file: "/images/Documents.jpeg", title: "Document Viewer", desc: "View and interact with PDFs" },
  { id: "settings", file: "/images/Settings.jpeg", title: "Settings", desc: "Customize your experience" },
];

const INTERVAL = 3000;

export default function AppScreenshots() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % screenshots.length);
    }, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isMobile]);

  const goTo = (i: number) => {
    clearInterval(timerRef.current);
    setActive(i);
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % screenshots.length);
    }, INTERVAL);
  };

  const prev = () => goTo((active - 1 + screenshots.length) % screenshots.length);
  const next = () => goTo((active + 1) % screenshots.length);

  if (isMobile) {
    return (
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            <h2 className="gradient-text" style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, marginBottom: 16 }}>
              App Preview
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 500, margin: "0 auto" }}>
              A clean, intuitive interface designed for speed. Every tool is one tap away.
            </p>
          </motion.div>

          <div
            ref={scrollRef}
            className="screenshot-scroll"
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: 16,
              padding: "20px 0",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {screenshots.map((s) => (
              <div
                key={s.id}
                style={{
                  flex: "0 0 100%",
                  scrollSnapAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={s.file}
                  alt={s.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    maxWidth: 260,
                    height: "auto",
                    borderRadius: 20,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  }}
                />
                <p style={{ color: "var(--text-secondary)", fontSize: 14, fontWeight: 500, marginTop: 16 }}>
                  {s.title}
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, opacity: 0.7 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 12 }}>
            {screenshots.map((s) => (
              <div
                key={s.id}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--border)",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <h2 className="gradient-text" style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, marginBottom: 16 }}>
            App Preview
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 500, margin: "0 auto" }}>
            A clean, intuitive interface designed for speed. Every tool is one tap away.
          </p>
        </motion.div>

        <div style={{ position: "relative", maxWidth: 360, margin: "0 auto" }}>
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              position: "absolute", left: -60, top: "50%", transform: "translateY(-50%)",
              zIndex: 10, width: 40, height: 40, borderRadius: "50%",
              border: "1px solid var(--border)", background: "var(--bg-card)",
              color: "var(--text-secondary)", fontSize: 20, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: 0.7, transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.color = "var(--text-primary)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.7"; e.currentTarget.style.color = "var(--text-secondary)"; }}
          >&#8249;</button>
          <button
            onClick={next}
            aria-label="Next"
            style={{
              position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)",
              zIndex: 10, width: 40, height: 40, borderRadius: "50%",
              border: "1px solid var(--border)", background: "var(--bg-card)",
              color: "var(--text-secondary)", fontSize: 20, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: 0.7, transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.color = "var(--text-primary)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.7"; e.currentTarget.style.color = "var(--text-secondary)"; }}
          >&#8250;</button>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden", padding: "20px 0", position: "relative",
            minHeight: 340,
          }}>
            {screenshots.map((s, i) => (
              <motion.div
                key={s.id}
                animate={{
                  opacity: i === active ? 1 : 0,
                  scale: i === active ? 1 : 0.95,
                  x: i === active ? 0 : (i < active ? -30 : 30),
                  pointerEvents: i === active ? "auto" : "none",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  position: i === active ? "relative" : "absolute",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <img
                  src={s.file}
                  alt={s.title}
                  style={{
                    width: "100%",
                    maxWidth: 320,
                    height: "auto",
                    borderRadius: 20,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 12 }}>
              {screenshots.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === active ? 24 : 8, height: 8,
                    borderRadius: 4, border: "none",
                    background: i === active ? "var(--primary)" : "var(--border)",
                    cursor: "pointer", transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, fontWeight: 500 }}>
              {screenshots[active].title}
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: 13, opacity: 0.7 }}>
              {screenshots[active].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
