"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

export default function ClosingCTA() {
  const [isFlashing, setIsFlashing] = useState(false);

  const handleHover = useCallback(() => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 200);
  }, []);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-[#080808] px-6 py-24">
      <div className="flex flex-col items-center text-center">
        <h2
          className="text-6xl tracking-wide text-white md:text-8xl lg:text-9xl"
          style={{
            fontFamily: "var(--font-bebas-neue)",
            lineHeight: 0.9,
          }}
        >
          YOUR M4
        </h2>
        <h2
          className="mt-2 text-6xl tracking-wide md:text-8xl lg:text-9xl"
          style={{
            fontFamily: "var(--font-bebas-neue)",
            lineHeight: 0.9,
            color: "var(--m-red)",
          }}
        >
          AWAITS
        </h2>

        <Button
          onMouseEnter={handleHover}
          className="mt-12 h-16 px-12 text-xl tracking-[0.2em] rounded-none text-white transition-all duration-300"
          style={{
            fontFamily: "var(--font-bebas-neue)",
            background: isFlashing
              ? "linear-gradient(90deg, var(--m-blue), var(--m-violet), var(--m-red))"
              : "#1B72E8",
            boxShadow: isFlashing
              ? "0 0 40px rgba(27,114,232,0.5), 0 0 80px rgba(155,79,245,0.3)"
              : "none",
          }}
        >
          BOOK A TEST DRIVE
        </Button>

        <p
          className="mt-8 text-xs tracking-[0.2em] text-[#444]"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          Available at authorized BMW M dealers worldwide
        </p>
      </div>
    </section>
  );
}
