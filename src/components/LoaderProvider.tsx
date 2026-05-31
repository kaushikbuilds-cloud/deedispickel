"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CinematicLoader from "./CinematicLoader";

export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  // Always show on fresh page load (not session-gated)
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>{loading && <CinematicLoader onComplete={() => setLoading(false)} />}</AnimatePresence>
      {children}
    </>
  );
}
