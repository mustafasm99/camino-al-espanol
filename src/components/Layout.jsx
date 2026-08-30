import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useProgress } from "@/context/ProgressContext";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pct, done } = useProgress();

  return (
    <>
      <div className="flag-stripe" />
      <Header pct={pct} onOpenSidebar={() => setSidebarOpen(true)} />

      <div className="container flex items-start gap-7 py-7">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} done={done} />
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>

      <footer className="mt-10 border-t border-line py-9">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <p className="text-[12.5px] text-ink-soft">
            🇪🇸 Camino al Español — curso A1 interactivo, 12 lecciones, hecho para aprender hablando.
          </p>
          <p className="text-[12.5px] text-ink-soft">Tu progreso se guarda automáticamente en este navegador.</p>
        </div>
      </footer>
    </>
  );
}
