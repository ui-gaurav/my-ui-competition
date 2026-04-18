import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, DM_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BMW M4 Competition — Born to Defy Gravity",
  description:
    "503 HP. 650 NM. 0–100 in 3.9s. The BMW M4 Competition redefines what a performance coupe can be. Configure yours today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        bebasNeue.variable,
        dmMono.variable,
        figtree.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#F5F5F5]">
        {children}
        <Script id="event-footer" strategy="afterInteractive">
          {`
            (function () {
              const EVENT_CODE = "SCRS_PA"; // Replaced with user's specific event code
              const UID = "SCRS_ARENA_A17"; // replace with participant ID

              const footer = document.createElement("div");

              // Non-intrusive styling
              footer.style.position = "fixed";
              footer.style.bottom = "0";
              footer.style.left = "0";
              footer.style.width = "100%";
              footer.style.background = "rgba(0,0,0,0.75)";
              footer.style.color = "#fff";
              footer.style.fontSize = "12px";
              footer.style.padding = "6px 10px";
              footer.style.textAlign = "right";
              footer.style.zIndex = "9999";
              footer.style.pointerEvents = "none";

              function formatTime(date) {
                return date.toLocaleTimeString('en-GB', { hour12: false });
              }

              function updateTime() {
                const now = new Date();
                footer.innerText =
                  "Created at: " + formatTime(now) +
                  " | Event Code: " + EVENT_CODE +
                  " | UID: " + UID;
              }

              updateTime();

              document.body.appendChild(footer);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
