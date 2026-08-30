import React from "react";
import anime from "animejs";
import { Check } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { cn } from "@/lib/utils";

export default function Homework({ lesson }) {
  const [checked, setChecked] = useLocalStorage(`hw-${lesson.id}`, {});

  function toggle(i, e) {
    const willCheck = !checked[i];
    setChecked((c) => ({ ...c, [i]: willCheck }));
    if (willCheck) {
      anime({
        targets: e.currentTarget.querySelector(".hw-check"),
        scale: [0.6, 1.15, 1],
        duration: 400,
        easing: "easeOutBack",
      });
    }
  }

  return (
    <div className="flex flex-col gap-2.5">
      {lesson.homework.map((h, i) => (
        <div
          key={i}
          onClick={(e) => toggle(i, e)}
          className={cn(
            "flex cursor-pointer items-start gap-3 rounded-2xl border border-line bg-white p-4 transition-colors",
            checked[i] && "bg-paper-dim"
          )}
        >
          <div
            className={cn(
              "hw-check mt-0.5 flex h-5.5 w-5.5 flex-shrink-0 items-center justify-center rounded-md border-2 border-line bg-white",
              checked[i] && "border-rojo bg-rojo text-white"
            )}
          >
            {checked[i] && <Check className="h-3.5 w-3.5" />}
          </div>
          <div className={cn("text-sm leading-relaxed", checked[i] && "text-ink-soft line-through")}>{h}</div>
        </div>
      ))}
    </div>
  );
}
