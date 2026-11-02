import { Orbit } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#01010a] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2.5">
              <Orbit className="h-7 w-7 text-cyan-400" />
              <span className="text-lg font-bold text-white">
                Cosmos<span className="text-cyan-400">3D</span>
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Uma jornada imersiva pelo universo. Explore planetas em 3D,
              descubra os mistérios da Via Láctea e mergulhe nas maravilhas
              cósmicas que moldam nossa existência.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Explorar
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#solar-system" className="hover:text-cyan-300">
                  Sistema Solar
                </a>
              </li>
              <li>
                <a href="#galaxy" className="hover:text-cyan-300">
                  Via Láctea
                </a>
              </li>
              <li>
                <a href="#phenomena" className="hover:text-cyan-300">
                  Fenômenos
                </a>
              </li>
              <li>
                <a href="#apod" className="hover:text-cyan-300">
                  Foto do Dia
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Universo
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#universe" className="hover:text-cyan-300">
                  Números do Universo
                </a>
              </li>
              <li>
                <a href="#planets" className="hover:text-cyan-300">
                  Planetas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-500">
            Dados astronômicos de domínio público — NASA & ESA. Feito com paixão
            pelo cosmos.
          </p>
        </div>
      </div>
    </footer>
  );
}
