import React from "react";
import anime from "animejs";
import { Volume2 } from "lucide-react";

function speak(text) {
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "es-ES";
    u.rate = 0.92;
    window.speechSynthesis.speak(u);
  } catch (e) {
    /* speech synthesis unavailable */
  }
}

export default function PhraseList({ phrases }) {
  function handleSpeak(e, text) {
    anime({
      targets: e.currentTarget,
      scale: [1, 0.85, 1.08, 1],
      duration: 500,
      easing: "easeOutElastic(1, .7)",
    });
    speak(text);
  }

  return (
    <div className="flex flex-col gap-2.5">
      {phrases.map((p, i) => (
        <div
          key={i}
          className="flex items-center gap-3.5 rounded-2xl border border-line bg-paper-dim px-4 py-3.5 transition-all hover:translate-x-1 hover:bg-white hover:shadow-soft"
        >
          <span className="flex-1 font-display text-[16px] font-semibold text-rojo-deep">{p.es}</span>
          <span className="flex-1 text-[13px] text-ink-soft">{p.en}</span>
          <button
            onClick={(e) => handleSpeak(e, p.es)}
            aria-label="Escuchar"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-line bg-white text-ink transition-colors hover:border-rojo hover:bg-rojo hover:text-white"
          >
            <Volume2 className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
