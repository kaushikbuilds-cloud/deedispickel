"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function FlyToCart() {
  const { fly, clearFly } = useCart();
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!fly) {
      setTarget(null);
      return;
    }
    // Find the currently-visible cart icon to fly toward.
    // (width > 0 reliably filters out display:none copies — works for SVG too.)
    const el = [...document.querySelectorAll("[data-cart-target]")].find(
      (e) => e.getBoundingClientRect().width > 0
    );
    if (!el) {
      clearFly();
      return;
    }
    const r = el.getBoundingClientRect();
    // Clamp into the viewport so the item never flies off-screen.
    const cx = Math.min(Math.max(r.left + r.width / 2, 16), window.innerWidth - 16);
    const cy = Math.min(Math.max(r.top + r.height / 2, 16), window.innerHeight - 16);
    setTarget({ x: cx, y: cy });
  }, [fly, clearFly]);

  return (
    <AnimatePresence>
      {fly && target && (
        <motion.img
          key={fly.key}
          src={fly.src}
          alt=""
          aria-hidden="true"
          initial={{ x: fly.x, y: fly.y, width: fly.w, height: fly.h, opacity: 1, rotate: 0 }}
          animate={{
            // Arc: rise up first, then drop into the cart.
            x: [fly.x, (fly.x + target.x) / 2, target.x - 22],
            y: [fly.y, Math.min(fly.y, target.y) - 120, target.y - 22],
            width: [fly.w, fly.w * 0.7, 44],
            height: [fly.h, fly.h * 0.7, 44],
            opacity: [1, 1, 0.2],
            rotate: [0, -12, 14],
          }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], times: [0, 0.5, 1] }}
          onAnimationComplete={clearFly}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 100000,
            pointerEvents: "none",
            objectFit: "contain",
            borderRadius: 14,
            filter: "drop-shadow(0 12px 20px rgba(124,22,15,0.35))",
          }}
        />
      )}
    </AnimatePresence>
  );
}
