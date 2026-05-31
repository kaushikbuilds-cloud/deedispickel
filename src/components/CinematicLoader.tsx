"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Pick video based on screen width
    const isMobile = window.innerWidth < 768;
    setVideoSrc(isMobile ? "/loadingmobile.mp4" : "/loading.mp4");
  }, []);

  useEffect(() => {
    if (!videoSrc) return;
    document.body.style.overflow = "hidden";

    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      document.body.style.overflow = "auto";
      onComplete();
    };

    // Fallback in case video doesn't fire ended event
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
  }, [videoSrc, onComplete]);

  // Don't render until we know which video to show
  if (!videoSrc) return null;

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
        src={videoSrc}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
