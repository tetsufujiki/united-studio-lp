"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CinematicBackground = dynamic(
  () => import("@/components/cinematic-background"),
  { ssr: false }
);

export function BgController() {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBg(true), 800);
    return () => clearTimeout(t);
  }, []);

  return showBg ? <CinematicBackground /> : null;
}