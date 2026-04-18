"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        alt?: string
        'auto-rotate'?: boolean
        'camera-controls'?: boolean
        'shadow-intensity'?: string
        'exposure'?: string
        'environment-image'?: string
        'auto-rotate-delay'?: string
        'rotation-per-second'?: string
        autoplay?: boolean
        style?: React.CSSProperties & { [key: string]: any }
      }
    }
  }
}

const M4_COLORS = [
  { name: "Frozen Black", hex: "#1A1A1A", rgb: [26/255, 26/255, 26/255] },
  { name: "São Paulo Yellow", hex: "#E8C200", rgb: [232/255, 194/255, 0] },
  { name: "Isle of Man Green", hex: "#1A5C3A", rgb: [26/255, 92/255, 58/255] },
  { name: "Portimão Blue", hex: "#0F2D5E", rgb: [15/255, 45/255, 94/255] },
  { name: "Toronto Red", hex: "#8B1A1A", rgb: [139/255, 26/255, 26/255] },
  { name: "Brooklyn Grey", hex: "#6B6B6B", rgb: [107/255, 107/255, 107/255] },
  { name: "Alpine White", hex: "#F5F5F0", rgb: [245/255, 245/255, 240/255] },
];

function ModelViewer({ activeColor }: { activeColor: { rgb: number[] } | null }) {
  const ref = useRef<any>(null)

  useEffect(() => {
    if (!document.querySelector('script[data-mv]')) {
      const s = document.createElement('script')
      s.type = 'module'
      s.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js'
      s.dataset.mv = '1'
      document.head.appendChild(s)
    }
  }, [])

  useEffect(() => {
    const mv = ref.current
    if (!mv || !activeColor) return

    const applyColor = () => {
      const mats = mv.model?.materials
      if (!mats) return
      
      // Only body paint material indices — skip glass, chrome, interior, wheels
      const bodyIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 55, 76, 77, 78, 79, 80, 82, 83]
      
      bodyIndices.forEach((i) => {
        if (mats[i]) {
          mats[i].pbrMetallicRoughness.setBaseColorFactor([
            activeColor.rgb[0],
            activeColor.rgb[1],
            activeColor.rgb[2],
            1
          ])
        }
      })
    }

    mv.addEventListener('load', applyColor, { once: false })
    applyColor()
    return () => mv.removeEventListener('load', applyColor)
  }, [activeColor])

  return (
    <model-viewer
      ref={ref}
      src="/models/bmw_m4.glb"
      alt="BMW M4 Competition"
      auto-rotate
      camera-controls
      shadow-intensity="1.2"
      exposure="0.8"
      autoplay
      style={{ width: '100%', height: '85vh', background: 'transparent', '--progress-bar-color': '#1B72E8' } as any}
    />
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeColor, setActiveColor] = useState<{ name: string; hex: string; rgb: number[] } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#080808]"
    >
      <div 
        className="grid min-h-[100vh] grid-cols-1 md:grid-cols-[1fr_1.4fr] items-center pt-[100px] pb-[60px] px-6 md:px-[48px] gap-12 md:gap-0"
      >
        {/* Left col: Text content stacked vertically */}
        <div className="relative z-10 flex flex-col items-start text-left md:pr-8">
          <p
            className="mb-4 text-xs tracking-[0.3em] text-[#666] transition-all duration-700 ease-out"
            style={{
              fontFamily: "var(--font-dm-mono)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
            }}
          >
            2026 BMW M4 COMPETITION
          </p>

          <h1 className="flex flex-col items-start pointer-events-none">
            <span
              className="block overflow-hidden"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
              }}
            >
              <span
                className="inline-block transition-all duration-1000 ease-out text-white"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(100%)",
                }}
              >
                BORN TO
              </span>
            </span>

            <span
              className="block overflow-hidden"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
              }}
            >
              <span
                className="inline-block transition-all duration-1000 ease-out text-white"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(100%)",
                  transitionDelay: "200ms",
                }}
              >
                DEFY <span className="text-[#1B72E8]">GRAVITY</span>
              </span>
            </span>
          </h1>

          <p
            className="mt-6 tracking-[0.35em] text-[#888] transition-all duration-700 ease-out pointer-events-none uppercase"
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "400ms",
            }}
          >
            503 HP · 3.9s 0-100 · 650 NM
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 z-10 w-full sm:w-auto"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "600ms",
            }}
          >
            <Button
              className="h-14 px-8 text-lg tracking-[0.15em] rounded-none bg-[#1B72E8] text-white hover:bg-[#1560c7] transition-all duration-300 w-full sm:w-auto"
              style={{ fontFamily: "var(--font-heading)" }}
              asChild
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfkDf7fSV4YAIGtOyJUYvAtqX6_x_5w2GCZAkwRd4Mvh3MBgw/viewform?usp=publish-editor" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                CONFIGURE YOURS
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 text-lg tracking-[0.15em] rounded-none border-[#333] bg-transparent text-white hover:border-[#1B72E8] hover:shadow-[0_0_30px_rgba(27,114,232,0.3)] transition-all duration-300 w-full sm:w-auto"
              style={{ fontFamily: "var(--font-heading)" }}
              asChild
            >
              <a 
                href="https://youtu.be/63JZ5IGXqm8?si=hrwR_G4w3pHIlH9W" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                WATCH FILM
              </a>
            </Button>
          </div>
        </div>

        {/* Right col: model-viewer and color picker */}
        <div 
          className="relative w-full h-[85vh] md:h-full flex items-center justify-center transition-all duration-1000 ease-out order-first md:order-last"
          style={{
            opacity: mounted ? 1 : 0,
            transitionDelay: "400ms",
          }}
        >
          {/* Glassmorphism Color Picker Panel (Right side aligned, column layout) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 z-20 flex flex-row md:flex-col items-center gap-3 rounded-full bg-white/5 border border-white/10 p-3 backdrop-blur-xl shadow-2xl">
            {M4_COLORS.map((color) => {
              const isActive = activeColor?.hex === color.hex;
              return (
                <button
                  key={color.name}
                  onClick={() => setActiveColor(color)}
                  className="group relative flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full transition-transform hover:scale-110"
                  aria-label={`Select ${color.name}`}
                >
                  <span
                    className={`block h-full w-full rounded-full border-2 transition-colors ${
                      isActive ? "border-white" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  {/* Tooltip */}
                  <span 
                    className="absolute bottom-10 md:bottom-auto md:right-12 hidden whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs tracking-widest text-white backdrop-blur-sm group-hover:block border border-white/10"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {color.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Wrap model-viewer nicely inside the designated container */}
          <div className="w-full h-[85vh] relative isolate">
            {/* Soft backdrop glow to ground the transparent model viewer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-white/5 blur-[120px] pointer-events-none -z-10" />
            <ModelViewer activeColor={activeColor} />
          </div>
          
          <div className="absolute bottom-14 md:bottom-6 right-6 text-right pointer-events-none z-10 opacity-60 hidden md:block">
            <span className="text-[10px] tracking-[0.3em] text-[#888] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
              Drag to rotate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
