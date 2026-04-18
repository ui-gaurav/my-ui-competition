"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="m4-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        backgroundColor: scrolled
          ? "rgba(0, 0, 0, 0.8)"
          : "rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <span
            className="text-2xl tracking-wider text-white"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            BMW M4
          </span>
          <span
            className="text-[10px] tracking-[0.3em] text-[#666] uppercase"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            COMPETITION
          </span>
        </div>

        {/* Right: Ghost links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#performance"
            className="text-sm tracking-wide text-[#888] transition-colors duration-300 hover:text-white"
            style={{ fontFamily: "var(--font-figtree)" }}
          >
            Performance
          </a>
          <a
            href="#design"
            className="text-sm tracking-wide text-[#888] transition-colors duration-300 hover:text-white"
            style={{ fontFamily: "var(--font-figtree)" }}
          >
            Design
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfkDf7fSV4YAIGtOyJUYvAtqX6_x_5w2GCZAkwRd4Mvh3MBgw/viewform?usp=publish-editor"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-[#888] transition-colors duration-300 hover:text-[#1B72E8]"
            style={{ fontFamily: "var(--font-figtree)" }}
          >
            Configure
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfkDf7fSV4YAIGtOyJUYvAtqX6_x_5w2GCZAkwRd4Mvh3MBgw/viewform?usp=publish-editor"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-white transition-colors duration-300 hover:text-[#1B72E8]"
            style={{ fontFamily: "var(--font-figtree)" }}
          >
            Book Test Drive
          </a>
        </div>
      </div>

      {/* M Tricolor gradient line */}
      <div className="m-tricolor-line" />
    </nav>
  );
}
