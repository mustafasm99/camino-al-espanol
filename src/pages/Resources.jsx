import React from "react";
import { Library, ExternalLink, Music4, ImageIcon } from "lucide-react";
import { WEBSITES, SONGS, IMAGE_SEARCH_TERMS } from "@/data/resources";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";

export default function Resources() {
  return (
    <div>
      <Reveal>
        <div className="mb-7 flex items-center gap-3">
          <Library className="h-7 w-7 text-rojo" />
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Recursos extra</h2>
            <p className="text-sm text-ink-soft">Webs de práctica, canciones y bancos de imágenes para reforzar cada lección.</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-bold"><ExternalLink className="h-4.5 w-4.5 text-rojo" /> Webs de práctica</h3>
      </Reveal>
      <div className="mb-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {WEBSITES.map((w, i) => (
          <Reveal key={w.name} delay={i * 40}>
            <a href={w.url} target="_blank" rel="noreferrer" className="group block h-full">
              <Card className="h-full p-4.5 transition-all group-hover:-translate-y-1 group-hover:shadow-card">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-display text-[16px] font-bold">{w.name}</h4>
                  <ExternalLink className="h-3.5 w-3.5 text-ink-soft transition-colors group-hover:text-rojo" />
                </div>
                <p className="mb-3 text-[13px] leading-relaxed text-ink-soft">{w.note}</p>
                <div className="flex flex-wrap gap-1.5">
                  {w.tags.map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-bold"><Music4 className="h-4.5 w-4.5 text-rojo" /> Playlist del curso</h3>
      </Reveal>
      <div className="mb-9 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
        {SONGS.map((s, i) => (
          <div
            key={s.title}
            className={`flex items-center justify-between gap-3 px-5 py-3.5 ${i !== SONGS.length - 1 ? "border-b border-line" : ""}`}
          >
            <div>
              <div className="font-display text-[15px] font-bold">🎵 {s.title}</div>
              <div className="text-[12.5px] text-ink-soft">{s.note}</div>
            </div>
            <Badge variant="rojo">{s.stage}</Badge>
          </div>
        ))}
      </div>

      <Reveal>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-bold"><ImageIcon className="h-4.5 w-4.5 text-rojo" /> Ideas de búsqueda de imágenes</h3>
      </Reveal>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {IMAGE_SEARCH_TERMS.map((g, i) => (
          <Reveal key={g.lesson} delay={i * 50}>
            <Card className="p-4.5">
              <h4 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-rojo-deep">Lección {g.lesson}</h4>
              <div className="flex flex-wrap gap-1.5">
                {g.terms.map((t) => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
