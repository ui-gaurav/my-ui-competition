const features = [
  {
    title: "M CARBON CERAMIC BRAKES",
    description:
      "Gold-caliper M Carbon Ceramic brakes deliver unparalleled stopping power with 40% less unsprung weight. Track-proven compound maintains consistent bite under extreme thermal stress.",
  },
  {
    title: "CARBON FIBER ROOF",
    description:
      "A single-piece CFRP roof panel lowers the center of gravity by 10mm, enhancing cornering agility. Weight savings of 6kg exactly where it matters most — above your head.",
  },
  {
    title: "ADAPTIVE M SUSPENSION",
    description:
      "Electronically controlled dampers react in milliseconds to road surface changes. Three modes — Comfort, Sport, Sport+ — each precisely tuned for the M4 Competition's chassis geometry.",
  },
];

function CarbonWeaveGrid() {
  const rows = 4;
  const cols = 8;

  return (
    <div className="grid grid-cols-8 gap-1">
      {Array.from({ length: rows * cols }).map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        return (
          <div
            key={index}
            className="aspect-square animate-weave"
            style={{
              backgroundColor: "#1B72E8",
              animationDelay: `${(row + col) * 0.15}s`,
              animationDuration: "2s",
            }}
          />
        );
      })}
    </div>
  );
}

export default function TechStrip() {
  return (
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left column — Tech specs */}
      <div className="flex items-center bg-[#080808] px-8 py-24 md:px-16">
        <div className="w-full max-w-lg">
          <h2
            className="mb-16 text-6xl tracking-wide text-white md:text-7xl"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            M CARBON
          </h2>

          <div className="space-y-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border-l-2 border-[#1B72E8] pl-6"
              >
                <h3
                  className="mb-3 text-xs tracking-[0.25em] text-white"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-[#888]"
                  style={{ fontFamily: "var(--font-figtree)" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right column — Carbon weave animation */}
      <div className="flex items-center justify-center bg-[#0d0d0d] p-12 md:p-16">
        <div className="w-full max-w-sm">
          <CarbonWeaveGrid />
          <p
            className="mt-8 text-center text-xs tracking-[0.3em] text-[#444]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            CFRP WEAVE PATTERN
          </p>
        </div>
      </div>
    </section>
  );
}
