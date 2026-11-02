import { useState, useEffect } from "react";
import { Orbit, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Início", href: "#hero" },
  { label: "Sistema Solar", href: "#solar-system" },
  { label: "Planetas", href: "#planets" },
  { label: "Via Láctea", href: "#galaxy" },
  { label: "Universo", href: "#universe" },
  { label: "Fenômenos", href: "#phenomena" },
  { label: "Foto do Dia", href: "#apod" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#01010a]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center">
            <Orbit className="h-8 w-8 text-cyan-400" />
            <div className="absolute h-2 w-2 rounded-full bg-amber-300" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Cosmos<span className="text-cyan-400">3D</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#01010a]/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
