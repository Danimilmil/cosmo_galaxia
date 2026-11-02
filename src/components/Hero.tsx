import { Rocket, MousePointerClick } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 animate-[fade-in-down_1s_ease-out]">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-300">
            <Rocket className="h-3.5 w-3.5" />
            Jornada pelo Universo
          </div>
        </div>

        <h1 className="animate-[fade-in-up_1.2s_ease-out_0.2s_both] bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-5xl font-bold leading-[1.1] tracking-tight text-transparent sm:text-7xl md:text-8xl">
          Explore o
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Cosmos Infinito
          </span>
        </h1>

        <p className="mt-8 max-w-2xl animate-[fade-in-up_1.2s_ease-out_0.4s_both] text-lg leading-relaxed text-slate-400 sm:text-xl">
          Uma experiência imersiva em 3D pelo Sistema Solar, nossa galáxia e os
          fenômenos mais extraordinários do universo. Descubra os segredos que
          moldam tudo que existe.
        </p>

        <div className="mt-12 flex animate-[fade-in-up_1.2s_ease-out_0.6s_both] flex-col items-center gap-4 sm:flex-row">
          <a
            href="#solar-system"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <span className="relative z-10">Explorar Sistema Solar</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#galaxy"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
          >
            Ver a Galáxia
          </a>
        </div>

        <div className="mt-20 flex animate-[fade-in_1.5s_ease-out_1s_both] items-center gap-2 text-xs text-slate-500">
          <MousePointerClick className="h-4 w-4" />
          Arraste para girar · Scroll para zoom
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/20 pt-2">
          <div className="h-2 w-1 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
