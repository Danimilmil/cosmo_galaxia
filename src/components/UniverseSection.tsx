import { UNIVERSE_STATS } from "@/data/planets";
import { Sparkles } from "lucide-react";

export default function UniverseSection() {
  return (
    <section id="universe" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            O Cosmos em Números
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Números do Universo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Escalas que desafiam a imaginação. O universo é vasto além de tudo
            que podemos conceber.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UNIVERSE_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 transition-all duration-500 hover:border-cyan-400/30"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl transition-all duration-700 group-hover:bg-cyan-500/15" />
              <div className="relative">
                <div className="mb-2 text-xs uppercase tracking-widest text-slate-400">
                  {stat.title}
                </div>
                <div className="mb-4 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                  {stat.value}
                </div>
                <p className="text-sm leading-relaxed text-slate-400">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <TimelineCard
            title="Origem do Universo"
            subtitle="O Big Bang"
            time="13,8 bilhões de anos atrás"
            description="Tudo começou a partir de um ponto infinitamente denso e quente. Em uma fração de segundo, o universo se expandiu de um tamanho menor que um átomo para algo incompreensivelmente vasto. O espaço, o tempo, a matéria e a energia nasceram nesse instante singular."
          />
          <TimelineCard
            title="Formação do Sistema Solar"
            subtitle="Nosso Cantinho Cósmico"
            time="4,6 bilhões de anos atrás"
            description="A partir do colapso de uma nuvem de gás e poeira, formou-se o Sol e, a partir do disco restante, os planetas. A Terra e seu único satélite natural, a Lua, surgiram desse processo turbulento de acreção e colisões planetárias."
          />
          <TimelineCard
            title="Vida na Terra"
            subtitle="O Milagre da Existência"
            time="3,5 bilhões de anos atrás"
            description="Os primeiros sinais de vida surgem nos oceanos da Terra. Micróbios simples dariam origem, bilhões de anos depois, a toda a biodiversidade que conhecemos — a única vida confirmada em todo o universo."
          />
          <TimelineCard
            title="O Futuro"
            subtitle="O Que Vem a Seguir"
            time="Daqui a bilhões de anos"
            description="O Sol se tornará uma gigante vermelha, engolindo planetas próximos. Em 4,5 bilhões de anos, a Via Láctea colidirá com Andrômeda. Eventualmente, o universo poderá se tornar um vazio gelado ou continuar expandindo para sempre."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  title,
  subtitle,
  time,
  description,
}: {
  title: string;
  subtitle: string;
  time: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
      <div className="mb-1 text-xs uppercase tracking-widest text-cyan-400">
        {time}
      </div>
      <h3 className="mb-1 text-2xl font-bold text-white">{title}</h3>
      <p className="mb-4 text-sm font-medium text-slate-400">{subtitle}</p>
      <p className="text-sm leading-relaxed text-slate-300">{description}</p>
    </div>
  );
}
