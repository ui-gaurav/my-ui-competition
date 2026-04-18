export default function MarqueeTicker() {
  const items = [
    "503 HP",
    "650 NM TORQUE",
    "3.9s 0–100",
    "290 KM/H",
    "M TWINPOWER TURBO",
    "COMPETITION PACK",
  ];

  const content = items.join(" · ") + " · ";

  return (
    <div
      id="marquee-ticker"
      className="relative w-full overflow-hidden border-t border-b border-[#222] bg-[#080808] py-4"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat content 4 times for seamless loop */}
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="mr-0 text-sm tracking-[0.25em] text-[#666]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
