"use client";

import dynamic from "next/dynamic";

const CinematicBackground = dynamic(
  () => import("./cinematic-background").then((mod) => ({ default: mod.CinematicBackground })),
  { ssr: false }
);

export function LazyCinematicBackground() {
  return <CinematicBackground />;
}
