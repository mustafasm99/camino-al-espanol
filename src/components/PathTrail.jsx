import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { useNavigate } from "react-router-dom";
import { LESSONS } from "@/data/lessons";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PathTrail({ done, activeId }) {
  const trackRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const stops = el.querySelectorAll(".stop-node");
    anime.set(stops, { opacity: 0, translateY: 16, scale: 0.85 });
    anime({
      targets: stops,
      opacity: [0, 1],
      translateY: [16, 0],
      scale: [0.85, 1],
      delay: anime.stagger(70),
      duration: 500,
      easing: "easeOutBack",
    });
  }, []);

  function handleClick(e, id) {
    const target = e.currentTarget.querySelector(".stop-badge");
    anime({
      targets: target,
      scale: [1, 1.25, 1],
      duration: 420,
      easing: "easeOutElastic(1, .6)",
    });
    setTimeout(() => navigate(`/lesson/${id}`), 120);
  }

  return (
    <div className="overflow-x-auto pb-3">
      <div ref={trackRef} className="relative flex min-w-max gap-0 px-1 pb-6 pt-2">
        <div className="dashed-line absolute left-0 right-0 top-[38px] z-0 h-1" />
        {LESSONS.map((l) => {
          const isDone = !!done[l.id];
          const isActive = l.id === Number(activeId);
          return (
            <button
              key={l.id}
              onClick={(e) => handleClick(e, l.id)}
              className="stop-node relative z-10 flex w-[150px] flex-shrink-0 flex-col items-center gap-2.5 px-2.5 text-center"
            >
              <span
                className={cn(
                  "stop-badge flex h-14 w-14 items-center justify-center rounded-full border-[3px] bg-white font-display text-lg font-extrabold text-ink-soft shadow-soft transition-colors",
                  isDone && "border-rojo bg-rojo text-white",
                  isActive && "scale-110 border-oro-soft bg-oro text-ink shadow-[0_0_0_6px_rgba(241,191,0,.22)]"
                )}
              >
                {isDone ? <Check className="h-5 w-5" /> : l.emoji}
              </span>
              <span className="text-[12.5px] font-bold leading-tight text-ink">
                {l.title.split(",")[0].split(" y ")[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
