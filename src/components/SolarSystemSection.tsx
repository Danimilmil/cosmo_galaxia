import { Suspense, useState } from "react";
import { X, Moon, Orbit, Thermometer, Gauge, Weight, Clock, Globe } from "lucide-react";
import SolarSystem3D from "./SolarSystem3D";
import { SUN_DATA, type PlanetData } from "@/data/planets";

export default function SolarSystemSection() {
  const [selected, setSelected] = useState<PlanetData | null>(null);

  return (
    <section
      id="solar-system"
      className="relative min-h-screen overflow-hidden py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-300">
            <Orbit className="h-3.5 w-3.5" />
            Interativo · 3D
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Sistema Solar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Explore os oito planetas em órbita ao redor do Sol. Clique em um
            planeta para descobrir seus segredos.
          </p>
        </div>

        <div className="group relative h-[600px] overflow-hidden rounded-3xl border border-white/10 bg-[#01010a] shadow-2xl shadow-cyan-500/10">
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center text-slate-400">
                Carregando o Sistema Solar 3D...
              </div>
            }
          >
            <SolarSystem3D
              selectedPlanet={selected}
              onSelectPlanet={setSelected}
            />
          </Suspense>

          <div className="pointer-events-none absolute left-4 top-4 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs text-slate-300 backdrop-blur-md">
            <span className="text-cyan-400">●</span> Arraste para girar ·
            Clique nos planetas
          </div>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a0a1e] to-[#050510] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4">
              <div
                className="h-20 w-20 shrink-0 rounded-full shadow-lg"
                style={{
                  backgroundColor: selected.color,
                  boxShadow: `0 0 40px ${selected.color}80, 0 0 80px ${selected.color}40`,
                }}
              />
              <div>
                <h3 className="text-3xl font-bold text-white">
                  {selected.name}
                </h3>
                <p className="text-sm uppercase tracking-widest text-slate-400">
                  {selected.nameEn}
                </p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-slate-300">
              {selected.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <StatCard
                icon={<Globe className="h-4 w-4" />}
                label="Raio"
                value={`${selected.realRadiusKm.toLocaleString("pt-BR")} km`}
              />
              <StatCard
                icon={<Orbit className="h-4 w-4" />}
                label="Distância do Sol"
                value={`${selected.realDistanceMillionKm} mi km`}
              />
              <StatCard
                icon={<Clock className="h-4 w-4" />}
                label="Período Orbital"
                value={selected.orbitalPeriod}
              />
              <StatCard
                icon={<Clock className="h-4 w-4" />}
                label="Rotação"
                value={selected.rotationPeriod}
              />
              <StatCard
                icon={<Thermometer className="h-4 w-4" />}
                label="Temperatura"
                value={selected.temperature}
              />
              <StatCard
                icon={<Gauge className="h-4 w-4" />}
                label="Gravidade"
                value={selected.gravity}
              />
              <StatCard
                icon={<Weight className="h-4 w-4" />}
                label="Massa"
                value={selected.mass}
              />
              <StatCard
                icon={<Moon className="h-4 w-4" />}
                label="Luas"
                value={String(selected.moons)}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
              <p className="text-sm text-cyan-200">
                <span className="font-semibold">Você sabia? </span>
                {selected.funFact}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="mb-1 flex items-center gap-1.5 text-xs text-slate-400">
        {icon}
        {label}
      </div>
      <div className="text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
