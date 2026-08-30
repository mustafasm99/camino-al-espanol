import React, { createContext, useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LESSONS } from "@/data/lessons";

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [done, setDone] = useLocalStorage("camino-done-v1", {});

  function toggleDone(id) {
    setDone((d) => ({ ...d, [id]: !d[id] }));
  }

  const doneCount = Object.values(done).filter(Boolean).length;
  const pct = Math.round((doneCount / LESSONS.length) * 100);

  return (
    <ProgressContext.Provider value={{ done, toggleDone, doneCount, pct }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside <ProgressProvider>");
  return ctx;
}
