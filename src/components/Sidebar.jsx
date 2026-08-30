import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { X, Search, CheckCircle2, GraduationCap, LibraryBig } from "lucide-react";
import { LESSONS } from "@/data/lessons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Sidebar({ open, onClose, done }) {
  const [query, setQuery] = useState("");
  const location = useLocation();
  const filtered = LESSONS.filter((l) => l.title.toLowerCase().includes(query.toLowerCase()));
  const doneCount = Object.values(done).filter(Boolean).length;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "z-50 flex w-[300px] flex-shrink-0 flex-col gap-4",
          "fixed inset-y-0 right-0 translate-x-full bg-white p-5 shadow-lifted transition-transform duration-300 md:sticky md:top-[86px] md:h-fit md:w-[280px] md:translate-x-0 md:bg-transparent md:p-0 md:shadow-none",
          open && "translate-x-0"
        )}
      >
        <div className="flex items-center justify-between md:hidden">
          <h3 className="font-display text-lg font-bold">Contenidos</h3>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-paper-dim">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="rounded-xl2 border border-line bg-white p-3.5 shadow-soft">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            <Input
              placeholder="Buscar lección…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="rounded-xl2 border border-line bg-white p-2 shadow-soft">
          <NavLink
            to="/"
            end
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-bold transition-colors",
                isActive ? "bg-ink text-white" : "text-ink-soft hover:bg-paper-dim hover:text-ink"
              )
            }
          >
            <LibraryBig className="h-4 w-4 flex-shrink-0" /> Tabla de contenidos
          </NavLink>

          <div className="my-1 max-h-[46vh] overflow-y-auto pr-1">
            {filtered.map((l) => {
              const isActive = location.pathname === `/lesson/${l.id}`;
              const isDone = !!done[l.id];
              return (
                <NavLink
                  key={l.id}
                  to={`/lesson/${l.id}`}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors",
                    isActive ? "bg-rojo text-white" : "hover:bg-paper-dim",
                    isDone && !isActive && "bg-paper-dim/60"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-7.5 w-7.5 flex-shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold text-ink-soft",
                      isActive ? "bg-white/20 text-white" : "bg-paper-dim",
                      isDone && !isActive && "bg-oro text-ink"
                    )}
                  >
                    {String(l.id).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block truncate text-[13.5px] font-bold",
                        isActive ? "text-white" : "text-ink"
                      )}
                    >
                      {l.emoji} {l.title}
                    </span>
                    <span className={cn("block truncate text-[11px]", isActive ? "text-white/80" : "text-ink-soft")}>
                      {l.kicker}
                    </span>
                  </span>
                  {isDone && <CheckCircle2 className={cn("h-4 w-4 flex-shrink-0", isActive ? "text-white" : "text-rojo")} />}
                </NavLink>
              );
            })}
          </div>

          <NavLink
            to="/exam"
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-bold transition-colors",
                isActive ? "bg-ink text-white" : "text-ink-soft hover:bg-paper-dim hover:text-ink"
              )
            }
          >
            <GraduationCap className="h-4 w-4 flex-shrink-0" /> Exámenes y evaluación
          </NavLink>
        </div>

        <div className="rounded-xl2 bg-gradient-to-br from-ink to-[#2A2622] p-4.5 text-white shadow-soft">
          <h4 className="mb-1.5 text-[14.5px] font-bold">🎓 Tu progreso</h4>
          <p className="mb-3 text-[12.5px] leading-relaxed text-[#D8D2C6]">
            Llevas <b className="text-oro-soft">{doneCount}/12</b> lecciones completadas. Repasa el vocabulario en
            tarjetas, escucha las frases y marca la tarea antes de avanzar.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-oro/20 px-2.5 py-1 text-[10.5px] font-bold text-oro-soft">🔊 Audio real</span>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10.5px] font-bold">💾 Progreso guardado</span>
          </div>
        </div>
      </aside>
    </>
  );
}
