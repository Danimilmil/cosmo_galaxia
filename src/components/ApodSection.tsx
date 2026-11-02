import { useEffect, useState } from "react";
import { Calendar, Image as ImageIcon, Loader2, AlertCircle } from "lucide-react";
import { APOD_FALLBACK, type ApodData } from "@/data/apod";

const NASA_APOD_URL =
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&thumbs=true";

export default function ApodSection() {
  const [apod, setApod] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(NASA_APOD_URL);
        if (!res.ok) throw new Error("NASA API error");
        const data: ApodData = await res.json();
        if (!cancelled) {
          setApod(data);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setApod(APOD_FALLBACK);
          setError(true);
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="apod" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-300">
            <ImageIcon className="h-3.5 w-3.5" />
            NASA · Astronomy Picture of the Day
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Foto Astronômica do Dia
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Uma nova imagem cósmica todos os dias, diretamente da NASA. Cada
            foto revela uma faceta diferente do nosso incrível universo.
          </p>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[300px] overflow-hidden bg-black">
                {apod?.media_type === "image" ? (
                  <img
                    src={apod.url}
                    alt={apod.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-64 items-center justify-center text-slate-500">
                    Mídia não suportada
                  </div>
                )}
                {error && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-amber-400/30 bg-black/70 px-3 py-2 text-xs text-amber-300 backdrop-blur-md">
                    <AlertCircle className="h-4 w-4" />
                    Exibindo imagem de demonstração
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="h-4 w-4" />
                  {apod?.date}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  {apod?.title}
                </h3>
                <p className="leading-relaxed text-slate-300">
                  {apod?.explanation}
                </p>
                {apod?.copyright && (
                  <p className="mt-4 text-xs text-slate-500">
                    Créditos: {apod.copyright}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
