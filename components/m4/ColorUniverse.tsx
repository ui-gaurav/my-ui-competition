"use client";

import { useState } from "react";

interface ColorOption {
  name: string;
  hex: string;
}

const colors: ColorOption[] = [
  { name: "Frozen Black", hex: "#0D0D0D" },
  { name: "São Paulo Yellow", hex: "#E8C200" },
  { name: "Isle of Man Green", hex: "#1A5C3A" },
  { name: "Portimão Blue", hex: "#0F3460" },
  { name: "Toronto Red", hex: "#C0392B" },
];

// Orbital positions — a gentle arc, not a straight row
const orbitalPositions = [
  { top: "55%", left: "8%" },
  { top: "20%", left: "25%" },
  { top: "10%", left: "50%" },
  { top: "20%", left: "75%" },
  { top: "55%", left: "88%" },
];

export default function ColorUniverse() {
  const [active, setActive] = useState("Frozen Black");
  const activeColor = colors.find((c) => c.name === active);

  return (
    <section id="design" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background radial wash */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${activeColor?.hex}1a 0%, transparent 60%)`,
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <h2
          className="mb-24 text-center text-5xl tracking-wide text-white md:text-6xl"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          CHOOSE YOUR IDENTITY
        </h2>

        {/* Orbital swatches */}
        <div className="relative mx-auto h-[280px] max-w-3xl md:h-[320px]">
          {colors.map((color, i) => {
            const isActive = active === color.name;
            return (
              <button
                key={color.name}
                onClick={() => setActive(color.name)}
                className="group absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                style={{
                  top: orbitalPositions[i].top,
                  left: orbitalPositions[i].left,
                }}
                aria-label={`Select ${color.name}`}
              >
                {/* Ping ring for active */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-full animate-ping-swatch"
                    style={{
                      backgroundColor: color.hex,
                      opacity: 0.3,
                    }}
                  />
                )}

                {/* Swatch */}
                <div
                  className="relative h-16 w-16 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: color.hex,
                    boxShadow: isActive
                      ? `0 0 30px ${color.hex}80, 0 0 60px ${color.hex}40`
                      : `0 0 15px ${color.hex}30`,
                    outline: isActive
                      ? "2px solid var(--m-blue)"
                      : "2px solid transparent",
                    outlineOffset: "4px",
                  }}
                >
                  {/* Inner highlight */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)",
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active color name */}
        <div className="mt-8 text-center">
          <p
            className="text-5xl tracking-wider text-white transition-all duration-500 md:text-7xl"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            {active.toUpperCase()}
          </p>
          <p
            className="mt-3 text-xs tracking-[0.3em] text-[#666]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            BMW INDIVIDUAL
          </p>
        </div>
      </div>
    </section>
  );
}
