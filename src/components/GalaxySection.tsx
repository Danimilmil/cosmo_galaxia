import { Suspense } from "react";
import { Orbit as GalaxyIcon } from "lucide-react";
import Galaxy3D from "./Galaxy3D";
import { GALAXY_FACTS, COSMIC_OBJECTS } from "@/data/planets";

export default function GalaxySection() {
  return (
    <section id="galaxy" className="relative overflow-hidden py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-violet-300">
            <GalaxyIcon className="h-3.5 w-3.5" />
            Galáxia 3D
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            A Via Láctea
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Nossa casa cósmica. Uma galáxia espiral com centenas de bilhões de
            estrelas girando ao redor de um buraco negro central.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="group relative h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-[#01010a] shadow-2xl shadow-violet-500/10 lg:col-span-3">
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center text-slate-400">
                  Carregando a galáxia 3D...
                </div>
              }
            >
              <Galaxy3D />
            </Suspense>
            <div className="pointer-events-none absolute left-4 top-4 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs text-slate-300 backdrop-blur-md">
              <span className="text-violet-400">●</span> Arraste para girar ·
              Visualização interativa
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <h3 className="mb-4 text-xl font-bold text-white">
                {GALAXY_FACTS.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-300">
                {GALAXY_FACTS.description}
              </p>
              <div className="space-y-2.5">
                <GalaxyStat label="Tipo" value={GALAXY_FACTS.type} />
                <GalaxyStat label="Diâmetro" value={GALAXY_FACTS.diameter} />
                <GalaxyStat label="Estrelas" value={GALAXY_FACTS.stars} />
                <GalaxyStat label="Idade" value={GALAXY_FACTS.age} />
                <GalaxyStat
                  label="Centro"
                  value={GALAXY_FACTS.centerSagittariusA}
                />
                <GalaxyStat
                  label="Rotação"
                  value={GALAXY_FACTS.rotationPeriod}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6">
          <h3 className="mb-4 text-lg font-bold text-violet-200">
            Curiosidades da Galáxia
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {GALAXY_FACTS.facts.map((fact, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-slate-300"
              >
                <span className="mt-0.5 text-violet-400">◆</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Objetos Notáveis do Universo
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COSMIC_OBJECTS.map((obj) => (
              <div
                key={obj.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                <div className="relative h-40 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${obj.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3">
                    <span className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                      {obj.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="mb-1 text-lg font-bold text-white">
                    {obj.name}
                  </h4>
                  <p className="mb-3 text-xs text-slate-400">
                    📍 {obj.distance}
                  </p>
                  <p className="mb-3 text-sm leading-relaxed text-slate-300">
                    {obj.description}
                  </p>
                  <ul className="space-y-1">
                    {obj.facts.map((f, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-xs text-slate-400"
                      >
                        <span className="text-cyan-500">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalaxyStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-white/5 pb-2">
      <span className="text-sm text-slate-400">{label}</span>
      <span className="text-sm font-semibold text-slate-200">{value}</span>
    </div>
  );
}
