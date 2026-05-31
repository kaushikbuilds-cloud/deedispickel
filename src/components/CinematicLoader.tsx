"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const video = videoRef.current;
    if (!video) return;

    // When video ends, fade out
    const handleEnded = () => {
      document.body.style.overflow = "auto";
      onComplete();
    };

    // Fallback: if video fails to load/play, dismiss after 5s
    const fallback = setTimeout(() => {
      document.body.style.overflow = "auto";
      onComplete();
    }, 10000);

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
      clearTimeout(fallback);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <video
        ref={videoRef}
        src="/loading.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
