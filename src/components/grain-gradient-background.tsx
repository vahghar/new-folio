"use client";

import { GrainGradient } from '@paper-design/shaders-react';

export function GrainGradientBackground() {
  return (
    <div className="fixed top-0 left-0 -z-10 w-screen h-screen overflow-hidden opacity-15 [&_*]:!w-screen [&_*]:!h-screen [&_*]:!object-cover">
      <GrainGradient
        width={1280}
        height={720}
        colors={["#9dc440", "#fbc2ff"]}
        colorBack="#000000"
        softness={0.5}
        intensity={0.5}
        noise={0.25}
        shape="corners"
        speed={1}
      />
    </div>
  );
}
