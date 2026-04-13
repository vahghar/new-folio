"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterLink = () => {
      ringRef.current?.classList.add("cursor-ring--hover");
      dotRef.current?.classList.add("cursor-dot--hover");
    };

    const onLeaveLink = () => {
      ringRef.current?.classList.remove("cursor-ring--hover");
      dotRef.current?.classList.remove("cursor-dot--hover");
    };

    document.addEventListener("mousemove", onMove);

    // Attach hover states to interactive elements
    const attachHover = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea, select")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnterLink);
          el.addEventListener("mouseleave", onLeaveLink);
        });
    };
    attachHover();

    // Lerp ring to follow dot with lag
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;

      // Dot snaps instantly
      dot.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;

      // Ring lags behind
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.12);
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Tiny solid dot — snaps to cursor */}
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      {/* Lagging ring */}
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
