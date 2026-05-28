"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const screenshots = [
  { id: "home", file: "/images/Home.jpeg", title: "Home Dashboard", desc: "Access all tools from one place" },
  { id: "tools", file: "/images/Tools.jpeg", title: "Feature Tools", desc: "Convert, organize, and secure documents" },
  { id: "viewer", file: "/images/Viewer.jpeg", title: "Document Viewer", desc: "View and interact with PDFs" },
  { id: "settings", file: "/images/Settings.jpeg", title: "Settings", desc: "Customize your experience" },
];

const INTERVAL = 3000;

export default function AppScreenshots() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % screenshots.length);
    }, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i: number) => {
    clearInterval(timerRef.current);
    setActive(i);
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % screenshots.length);
    }, INTERVAL);
  };

  const prev = () => goTo((active - 1 + screenshots.length) % screenshots.length);
  const next = () => goTo((active + 1) % screenshots.length);

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
          {!isMobile && (
            <>
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
              >‹</button>
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
              >›</button>
            </>
          )}

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden", padding: "20px 0",
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={screenshots[active].id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ width: "100%", textAlign: "center" }}
              >
                <img
                  src={screenshots[active].file}
                  alt={screenshots[active].title}
                  style={{
                    width: "100%",
                    maxWidth: isMobile ? 260 : 320,
                    height: "auto",
                    borderRadius: 20,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </motion.div>
            </AnimatePresence>
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
