import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpenCheck, GraduationCap, Library } from "lucide-react";
import { LESSONS } from "@/data/lessons";
import { useProgress } from "@/context/ProgressContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PathTrail from "@/components/PathTrail";
import Reveal from "@/components/Reveal";

const WORD = "el español";

export default function Home() {
  const { done, doneCount, pct } = useProgress();
  const [typed, setTyped] = useState("");
  const heroRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(WORD.slice(0, i));
      if (i >= WORD.length) clearInterval(t);
    }, 90);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    anime
      .timeline({ easing: "easeOutCubic" })
      .add({ targets: ".hero-eyebrow", opacity: [0, 1], translateY: [-10, 0], duration: 500 })
      .add({ targets: ".hero-title", opacity: [0, 1], translateY: [18, 0], duration: 650 }, "-=250")
      .add({ targets: ".hero-lede", opacity: [0, 1], translateY: [14, 0], duration: 550 }, "-=350")
      .add({ targets: ".hero-cta > *", opacity: [0, 1], translateY: [12, 0], duration: 450, delay: anime.stagger(90) }, "-=350");
  }, []);

  const nextLesson = LESSONS.find((l) => !done[l.id]) || LESSONS[0];

  return (
    <div>
      <section ref={heroRef} className="relative isolate mb-10 overflow-hidden rounded-[28px] border border-line bg-[radial-gradient(120%_140%_at_15%_-10%,#FDECC5_0%,#FBF7EE_46%)] p-9 sm:p-11">
        <div className="pointer-events-none absolute -right-36 -top-36 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(170,21,27,.16),transparent_70%)]" />

        <span className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-rojo/20 bg-rojo/10 px-3 py-1.5 font-mono text-[11.5px] font-bold uppercase tracking-wide text-rojo-deep opacity-0">
          <span className="h-1.5 w-1.5 rounded-full bg-oro shadow-[0_0_0_3px_rgba(241,191,0,.25)]" /> A1 · Nivel principiante
        </span>

        <h2 className="hero-title mt-4 max-w-[15ch] font-display text-[34px] font-bold leading-[1.05] opacity-0 sm:text-[52px]">
          Aprende <span className="text-rojo">{typed}</span>
          <span className="border-r-[3px] border-rojo pr-1 animate-blink"> </span> paso a paso
        </h2>

        <p className="hero-lede mt-4 max-w-[54ch] text-[16.5px] leading-relaxed text-ink-soft opacity-0">
          12 lecciones interactivas pensadas para adultos: vocabulario con tarjetas, frases con audio, práctica con
          quizzes y tareas — todo en un camino claro, del «Hola» a una conversación real.
        </p>

        <div className="hero-cta mt-7 flex flex-wrap gap-3.5">
          <Button asChild size="lg">
            <Link to={`/lesson/${nextLesson.id}`}>
              {doneCount === 0 ? "Empezar la Lección 1" : "Continuar donde lo dejé"} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/exam">Ver exámenes <GraduationCap className="h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link to="/resources">Recursos extra <Library className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="mt-12">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-[15px] font-extrabold uppercase tracking-wide text-ink-soft">Tu camino · 12 paradas</h3>
            <Badge variant="rojo">{doneCount}/12 completadas</Badge>
          </div>
          <PathTrail done={done} activeId={nextLesson.id} />
        </div>
      </section>

      <Reveal as="div" className="mb-5 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-2xl font-bold">
          <BookOpenCheck className="h-6 w-6 text-rojo" /> Tabla de contenidos
        </h3>
        <span className="hidden text-sm font-semibold text-ink-soft sm:block">{pct}% del curso completado</span>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LESSONS.map((l, i) => (
          <Reveal key={l.id} delay={i * 40}>
            <Link to={`/lesson/${l.id}`} className="group block h-full">
              <Card className="relative h-full overflow-hidden p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-card">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-rojo to-oro" />
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-rojo-deep">
                    {l.kicker}
                  </span>
                  {done[l.id] && <Badge variant="oro">✓ hecha</Badge>}
                </div>
                <h4 className="mt-2.5 font-display text-[19px] font-bold leading-snug">
                  {l.emoji} {l.title}
                </h4>
                <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-ink-soft">{l.intro}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge variant="outline">{l.level}</Badge>
                  <Badge variant="outline">{l.vocab.length} palabras</Badge>
                  <Badge variant="outline">{l.quiz.length} preguntas</Badge>
                </div>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
