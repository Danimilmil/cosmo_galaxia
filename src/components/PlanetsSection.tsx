import { PLANETS, SUN_DATA } from "@/data/planets";
import type { PlanetData } from "@/data/planets";
import { Moon, Thermometer, Gauge, Orbit } from "lucide-react";

export default function PlanetsSection() {
  return (
    <section id="planets" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-300">
            Catálogo Planetário
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Os Oito Planetas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Do diminuto Mercúrio ao distante Netuno, cada mundo conta uma
            história única sobre a formação do nosso Sistema Solar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANETS.map((planet, idx) => (
            <PlanetCard key={planet.id} planet={planet} index={idx} />
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-amber-500/10 p-8">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div
              className="h-24 w-24 shrink-0 rounded-full"
              style={{
                backgroundColor: "#FDB813",
                boxShadow:
                  "0 0 50px #FDB81380, 0 0 100px #FDB81340, 0 0 150px #FDB81320",
              }}
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-amber-200">
                {SUN_DATA.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {SUN_DATA.description}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <SunStat label="Tipo" value={SUN_DATA.type} />
                <SunStat label="Idade" value={SUN_DATA.age} />
                <SunStat label="Massa" value="333.000x Terra" />
                <SunStat label="Raio" value="696.340 km" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanetCard({ planet, index }: { planet: PlanetData; index: number }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.07]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className="mx-auto mb-6 h-20 w-20 rounded-full transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundColor: planet.color,
          boxShadow: `0 0 30px ${planet.color}60, 0 0 60px ${planet.color}30`,
        }}
      />

      <h3 className="text-center text-xl font-bold text-white">
        {planet.name}
      </h3>
      <p className="mb-4 text-center text-xs uppercase tracking-widest text-slate-500">
        {planet.nameEn}
      </p>

      <div className="space-y-2.5 text-sm">
        <InfoRow
          icon={<Orbit className="h-3.5 w-3.5" />}
          label="Órbita"
          value={planet.orbitalPeriod}
        />
        <InfoRow
          icon={<Thermometer className="h-3.5 w-3.5" />}
          label="Temp."
          value={planet.temperature.split(" a ")[0]}
        />
        <InfoRow
          icon={<Moon className="h-3.5 w-3.5" />}
          label="Luas"
          value={String(planet.moons)}
        />
        <InfoRow
          icon={<Gauge className="h-3.5 w-3.5" />}
          label="Gravidade"
          value={planet.gravity}
        />
      </div>

      <div className="mt-4 rounded-lg bg-cyan-400/5 p-3 text-xs text-cyan-200">
        {planet.funFact}
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-2">
      <span className="flex items-center gap-1.5 text-slate-400">
        {icon}
        {label}
      </span>
      <span className="font-medium text-slate-200">{value}</span>
    </div>
  );
}

function SunStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-slate-400">{label}</div>
      <div className="text-sm font-semibold text-amber-100">{value}</div>
    </div>
  );
}
