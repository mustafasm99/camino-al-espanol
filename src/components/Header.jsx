import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Header({ pct, onOpenSidebar }) {
  const r = 12;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10.5 w-10.5 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rojo to-rojo-deep font-display text-xl font-extrabold text-oro-soft shadow-soft">
            Ñ
          </div>
          <div className="leading-tight">
            <h1 className="text-[19px] font-bold">Camino al Español</h1>
            <span className="hidden text-[11px] font-semibold uppercase tracking-wide text-ink-soft sm:block">
              Curso A1 · para adultos
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 md:flex">
            <Link to="/" className="rounded-full px-3.5 py-2 text-[13px] font-bold text-ink-soft hover:bg-paper-dim hover:text-ink">
              Índice
            </Link>
            <Link to="/exam" className="rounded-full px-3.5 py-2 text-[13px] font-bold text-ink-soft hover:bg-paper-dim hover:text-ink">
              Exámenes
            </Link>
            <Link to="/resources" className="rounded-full px-3.5 py-2 text-[13px] font-bold text-ink-soft hover:bg-paper-dim hover:text-ink">
              Recursos
            </Link>
          </nav>

          <div className="flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-3.5 shadow-soft">
            <svg width="30" height="30" className="-rotate-90">
              <circle cx="15" cy="15" r={r} stroke="#E4DAC2" strokeWidth="4" fill="none" />
              <circle
                cx="15"
                cy="15"
                r={r}
                stroke="#AA151B"
                strokeWidth="4"
                fill="none"
                strokeDasharray={c}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset .6s cubic-bezier(.22,.9,.28,1)" }}
              />
            </svg>
            <div>
              <b className="text-[13px] font-extrabold">{pct}%</b>{" "}
              <small className="hidden text-[10.5px] font-semibold text-ink-soft sm:inline">completado</small>
            </div>
          </div>

          <button
            onClick={onOpenSidebar}
            className="flex h-10.5 w-10.5 items-center justify-center rounded-xl border border-line bg-white md:hidden"
            aria-label="Abrir menú de lecciones"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
