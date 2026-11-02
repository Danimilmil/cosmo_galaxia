import { COSMIC_PHENOMENA } from "@/data/planets";
import {
  Circle,
  Sparkles,
  Cloud,
  Ghost,
  Zap,
  Waves,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Circle,
  Sparkles,
  Cloud,
  Ghost,
  Zap,
  Waves,
};

export default function PhenomenaSection() {
  return (
    <section id="phenomena" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-300">
            Mistérios Cósmicos
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Fenômenos do Universo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Forças e eventos que desafiam nossa compreensão da realidade.
            Mistérios que a ciência ainda busca desvendar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COSMIC_PHENOMENA.map((phenom, idx) => {
            const Icon = ICONS[phenom.icon] ?? Circle;
            return (
              <div
                key={phenom.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.07]"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/5 blur-2xl transition-all duration-700 group-hover:bg-cyan-500/15" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {phenom.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">
                    {phenom.description}
                  </p>
                  <ul className="space-y-1.5">
                    {phenom.details.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
