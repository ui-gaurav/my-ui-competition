import NavBar from "@/components/m4/NavBar";
import Hero from "@/components/m4/Hero";
import MarqueeTicker from "@/components/m4/MarqueeTicker";
import SpecsGrid from "@/components/m4/SpecsGrid";
import ColorUniverse from "@/components/m4/ColorUniverse";
import TechStrip from "@/components/m4/TechStrip";
import ClosingCTA from "@/components/m4/ClosingCTA";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col bg-[#080808]">
      <NavBar />
      <Hero />
      <MarqueeTicker />
      <SpecsGrid />
      <ColorUniverse />
      <TechStrip />
      <ClosingCTA />

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] bg-[#080808] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p
            className="text-xs tracking-[0.2em] text-[#444]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            © 2026 BMW M GmbH. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Legal Notice", "Privacy Policy", "Cookie Settings"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs tracking-wider text-[#444] transition-colors hover:text-white"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}
