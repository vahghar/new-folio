"use client";

import { GrainGradient } from '@paper-design/shaders-react';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GrainGradientBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed top-0 left-0 -z-10 w-screen h-screen overflow-hidden opacity-50 dark:opacity-15 [&_*]:!w-screen [&_*]:!h-screen [&_*]:!object-cover">
      <GrainGradient
        width={1280}
        height={720}
        colors={isDark ? ["#ffffff", "#64748b"] : ["#ffedd5", "#fef08a"]}
        colorBack={isDark ? "#000000" : "#ffffff"}
        softness={0.5}
        intensity={0.5}
        noise={0.25}
        shape="corners"
        speed={1}
      />
    </div>
  );
}
