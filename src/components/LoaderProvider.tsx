"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CinematicLoader from "./CinematicLoader";

export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only show loader once per browser session
    const seen = sessionStorage.getItem("deedis_loader_seen");
    if (!seen) {
      setLoading(true);
    }
  }, []);

  const handleComplete = () => {
    setLoading(false);
    sessionStorage.setItem("deedis_loader_seen", "1");
  };

  return (
    <>
      <AnimatePresence>{loading && <CinematicLoader onComplete={handleComplete} />}</AnimatePresence>
      {children}
    </>
  );
}
