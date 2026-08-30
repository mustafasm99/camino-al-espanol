import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Quiz({ quiz, lessonId }) {
  const [answers, setAnswers] = useState({});
  const scoreRef = useRef(null);

  useEffect(() => setAnswers({}), [lessonId]);

  const total = quiz.length;
  const answered = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter((v) => v.correct).length;

  function choose(qi, oi, e) {
    if (answers[qi]) return;
    const correct = oi === quiz[qi].a;
    setAnswers((a) => ({ ...a, [qi]: { picked: oi, correct } }));
    anime({
      targets: e.currentTarget,
      translateX: correct ? [0, 0] : [0, -6, 6, -4, 4, 0],
      scale: correct ? [1, 1.03, 1] : 1,
      duration: 420,
      easing: "easeInOutSine",
    });
  }

  useEffect(() => {
    if (answered === total && total > 0 && scoreRef.current) {
      anime({
        targets: scoreRef.current,
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 500,
        easing: "easeOutBack",
      });
    }
  }, [answered, total]);

  return (
    <div className="flex flex-col gap-3.5">
      {quiz.map((q, qi) => {
        const state = answers[qi];
        return (
          <Card key={qi} className="p-5">
            <div className="mb-3.5 flex items-start gap-2.5 text-[15.5px] font-bold">
              <Badge variant="rojo">P{qi + 1}</Badge>
              <span>{q.q}</span>
            </div>
            <div className="grid gap-2">
              {q.opts.map((opt, oi) => {
                const isCorrect = state && oi === q.a;
                const isWrongPick = state && oi === state.picked && oi !== q.a;
                const isDisabled = state && !isCorrect && !isWrongPick;
                return (
                  <button
                    key={oi}
                    onClick={(e) => choose(qi, oi, e)}
                    className={cn(
                      "flex items-center justify-between rounded-xl border-[1.5px] border-line bg-paper px-3.5 py-3 text-left text-sm font-semibold transition-colors",
                      !state && "hover:border-ink",
                      isCorrect && "border-green-600 bg-green-50 text-green-800",
                      isWrongPick && "border-rojo bg-rojo/10 text-rojo-deep",
                      isDisabled && "pointer-events-none opacity-50"
                    )}
                  >
                    <span>{opt}</span>
                    {isCorrect && <Check className="h-4 w-4" />}
                    {isWrongPick && <X className="h-4 w-4" />}
                  </button>
                );
              })}
            </div>
            {state && (
              <p className={cn("mt-2.5 text-[13px] font-bold", state.correct ? "text-green-700" : "text-rojo-deep")}>
                {state.correct ? "¡Correcto! Muy bien." : "Casi — la respuesta correcta está marcada arriba."}
              </p>
            )}
          </Card>
        );
      })}

      <div ref={scoreRef} className="flex items-center justify-between rounded-2xl bg-ink px-5.5 py-4.5 text-white">
        <div>
          <div className="text-xs font-bold uppercase tracking-wide text-[#D8D2C6]">Resultado</div>
          <div className="mt-0.5 text-[13px]">{answered}/{total} respondidas</div>
        </div>
        <b className="font-display text-[26px] text-oro-soft">{correctCount}/{total}</b>
      </div>
    </div>
  );
}
