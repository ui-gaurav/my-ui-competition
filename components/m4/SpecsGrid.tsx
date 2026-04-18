"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Spec {
  value: string;
  label: string;
  color: string;
}

const specs: Spec[] = [
  { value: "503", label: "HP", color: "var(--m-red)" },
  { value: "3.9s", label: "0–100 KM/H", color: "var(--m-blue)" },
  { value: "650", label: "NM", color: "var(--m-violet)" },
  { value: "4.0L", label: "V8 BITURBO", color: "var(--m-red)" },
  { value: "290", label: "KM/H", color: "var(--m-blue)" },
  { value: "M", label: "xDRIVE", color: "var(--m-violet)" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const callbackRef = useCallback((node: HTMLDivElement | null) => {
    if (ref.current) {
      // cleanup
    }
    ref.current = node;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
  }, [threshold]);

  return { ref: callbackRef, isInView };
}

function SpecCard({ spec, index, isVisible }: { spec: Spec; index: number; isVisible: boolean }) {
  return (
    <div
      className="group relative border border-[#1a1a1a] bg-[#111] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#1B72E8] hover:shadow-[0_0_30px_rgba(27,114,232,0.2)]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0)"
          : "translateY(32px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div
        className="text-7xl leading-none md:text-8xl"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--text-primary)",
        }}
      >
        {spec.value}
      </div>
      <div
        className="mt-4 text-xs tracking-[0.25em] text-[#666]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {spec.label}
      </div>
      {/* Thin colored bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: spec.color }}
      />
    </div>
  );
}

export default function SpecsGrid() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="performance" className="px-0 py-24 md:py-32 bg-[#080808] w-full">
      <div className="mx-auto max-w-full">
        <h2
          className="mb-16 text-center text-5xl tracking-wide text-white md:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          ENGINEERED WITHOUT COMPROMISE
        </h2>
        <div ref={ref} className="grid grid-cols-2 gap-[1px] md:grid-cols-3 w-full">
          {specs.map((spec, i) => (
            <SpecCard key={spec.label} spec={spec} index={i} isVisible={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
