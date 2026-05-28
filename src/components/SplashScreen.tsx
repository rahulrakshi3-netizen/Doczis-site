"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    const remove = setTimeout(() => setShowSplash(false), 2800);
    return () => { clearTimeout(timer); clearTimeout(remove); };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--bg)",
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 24,
                background: "linear-gradient(135deg, var(--secondary), var(--accent))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 44,
                fontWeight: 900,
                color: "white",
                marginBottom: 32,
              }}
            >
              D
            </motion.div>
            <h1
              style={{
                fontSize: "clamp(40px, 10vw, 80px)",
                fontWeight: 900,
                letterSpacing: "-2px",
                lineHeight: 1,
                marginBottom: 16,
              }}
            >
              <DiaTextReveal
                text="DOCZIS"
                duration={1.2}
                delay={0.2}
                colors={["#059669", "#10B981", "#34D399", "#6EE7B7"]}
                textColor="var(--text-primary)"
              />
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, fontWeight: 500, letterSpacing: "0.5px", textTransform: "uppercase" }}>
              <DiaTextReveal
                text="Smart Document Hub"
                duration={1.5}
                delay={0.6}
                colors={["#64748B", "#94A3B8", "#CBD5E1"]}
                textColor="var(--text-secondary)"
                once
              />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ opacity: showSplash ? 0 : 1, transition: "opacity 0.5s ease" }}>
        {children}
      </div>
    </>
  );
}
