import React, { useRef, useState } from "react";
import anime from "animejs";

export default function FlashCard({ item }) {
  const innerRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  function toggle() {
    const next = !flipped;
    setFlipped(next);
    anime({
      targets: innerRef.current,
      rotateY: next ? 180 : 0,
      duration: 550,
      easing: "easeInOutCubic",
    });
  }

  return (
    <div className="flip-card h-[118px] cursor-pointer" onClick={toggle}>
      <div
        ref={innerRef}
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-2.5 text-center shadow-soft">
          <div className="font-display text-[17px] font-bold text-rojo-deep">{item.es}</div>
          <div className="mt-2 text-[10px] font-bold uppercase tracking-wide text-ink-soft">
            toca para traducir
          </div>
        </div>
        <div
          className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-ink p-2.5 text-center text-white"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="text-sm font-semibold">{item.en}</div>
          <div className="mt-1.5 text-[10px] font-bold uppercase tracking-wide text-oro-soft">
            español → english
          </div>
        </div>
      </div>
    </div>
  );
}
