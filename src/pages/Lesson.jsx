import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import anime from "animejs";
import { ArrowLeft, ArrowRight, CheckCircle2, LayoutGrid } from "lucide-react";
import { getLesson, getAdjacent } from "@/data/lessons";
import { useProgress } from "@/context/ProgressContext";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FlashCard from "@/components/FlashCard";
import PhraseList from "@/components/PhraseList";
import Quiz from "@/components/Quiz";
import Homework from "@/components/Homework";
import Reveal from "@/components/Reveal";
import Toast from "@/components/Toast";
import { useState } from "react";

export default function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = getLesson(id);
  const { prev, next } = getAdjacent(id);
  const { done, toggleDone } = useProgress();
  const [toast, setToast] = useState(false);
  const heroRef = React.useRef(null);

  useEffect(() => {
    if (!lesson) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    anime({
      targets: heroRef.current,
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 550,
      easing: "easeOutCubic",
    });
  }, [id, lesson]);

  if (!lesson) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg font-bold">Lección no encontrada.</p>
        <Button className="mt-4" onClick={() => navigate("/")}>Volver al índice</Button>
      </div>
    );
  }

  function handleMarkDone() {
    toggleDone(lesson.id);
    if (!done[lesson.id]) {
      setToast(true);
      setTimeout(() => setToast(false), 2200);
    }
  }

  return (
    <div>
      <div ref={heroRef} className="relative mb-6 overflow-hidden rounded-2xl border border-line bg-white p-6 opacity-0 shadow-soft sm:p-8">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-rojo to-oro" />
        <span className="font-mono text-xs font-bold uppercase tracking-wide text-rojo-deep">{lesson.kicker}</span>
        <h2 className="mt-2 font-display text-[26px] font-bold sm:text-4xl">
          {lesson.emoji} <span className="text-rojo">{lesson.title}</span>
        </h2>
        <p className="mt-2.5 max-w-[70ch] text-[15px] leading-relaxed text-ink-soft">{lesson.intro}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline">📘 {lesson.level}</Badge>
          <Badge variant="outline">⏱️ {lesson.duration}</Badge>
          <Badge variant="outline">🗂️ {lesson.vocab.length} palabras</Badge>
          <Badge variant="outline">✏️ {lesson.quiz.length} preguntas</Badge>
        </div>
        <Button
          variant={done[lesson.id] ? "default" : "outline"}
          className="mt-5"
          onClick={handleMarkDone}
        >
          <CheckCircle2 className="h-4 w-4" />
          {done[lesson.id] ? "Lección completada" : "Marcar como completada"}
        </Button>
      </div>

      <Tabs defaultValue="objetivos" className="w-full">
        <TabsList className="mb-5">
          <TabsTrigger value="objetivos">🎯 Objetivos</TabsTrigger>
          <TabsTrigger value="vocabulario">🗂️ Vocabulario</TabsTrigger>
          <TabsTrigger value="frases">💬 Frases clave</TabsTrigger>
          <TabsTrigger value="practica">✏️ Práctica</TabsTrigger>
          <TabsTrigger value="tarea">🏠 Tarea</TabsTrigger>
        </TabsList>

        <TabsContent value="objetivos">
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 text-lg font-bold">🎯 Objetivos de la lección</h3>
              <ul className="flex flex-col gap-3">
                {lesson.objectives.map((o, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14.5px] leading-relaxed">
                    <span className="flex h-6.5 w-6.5 flex-shrink-0 items-center justify-center rounded-lg bg-paper-dim font-mono text-xs font-extrabold text-rojo-deep">
                      {i + 1}
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vocabulario">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold">🗂️ Vocabulario clave</h3>
                <Badge>toca cada tarjeta</Badge>
              </div>
              <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
                {lesson.vocab.map((v, i) => (
                  <FlashCard key={lesson.id + "-" + i} item={v} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="frases">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold">💬 Frases que vas a usar</h3>
                <Badge>🔊 escúchalas</Badge>
              </div>
              <PhraseList phrases={lesson.phrases} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practica">
          <h3 className="mb-4 text-lg font-bold">✏️ Pon a prueba lo aprendido</h3>
          <Quiz quiz={lesson.quiz} lessonId={lesson.id} />
        </TabsContent>

        <TabsContent value="tarea">
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 text-lg font-bold">🏠 Tarea para casa</h3>
              <Homework lesson={lesson} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
        {prev ? (
          <Link
            to={`/lesson/${prev.id}`}
            className="flex flex-1 items-center gap-3 rounded-2xl border border-line bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-rojo hover:shadow-soft"
          >
            <ArrowLeft className="h-5 w-5 flex-shrink-0 text-rojo" />
            <span>
              <small className="block text-[11px] font-bold uppercase tracking-wide text-ink-soft">Anterior</small>
              <strong className="text-sm">{prev.title}</strong>
            </span>
          </Link>
        ) : (
          <Link
            to="/"
            className="flex flex-1 items-center gap-3 rounded-2xl border border-line bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-rojo hover:shadow-soft"
          >
            <LayoutGrid className="h-5 w-5 flex-shrink-0 text-rojo" />
            <span>
              <small className="block text-[11px] font-bold uppercase tracking-wide text-ink-soft">Volver</small>
              <strong className="text-sm">Tabla de contenidos</strong>
            </span>
          </Link>
        )}
        {next ? (
          <Link
            to={`/lesson/${next.id}`}
            className="flex flex-1 items-center justify-end gap-3 rounded-2xl border border-line bg-white p-4 text-right transition-all hover:-translate-y-0.5 hover:border-rojo hover:shadow-soft"
          >
            <span>
              <small className="block text-[11px] font-bold uppercase tracking-wide text-ink-soft">Siguiente</small>
              <strong className="text-sm">{next.title}</strong>
            </span>
            <ArrowRight className="h-5 w-5 flex-shrink-0 text-rojo" />
          </Link>
        ) : (
          <Link
            to="/exam"
            className="flex flex-1 items-center justify-end gap-3 rounded-2xl border border-line bg-white p-4 text-right transition-all hover:-translate-y-0.5 hover:border-rojo hover:shadow-soft"
          >
            <span>
              <small className="block text-[11px] font-bold uppercase tracking-wide text-ink-soft">¡Terminaste el curso!</small>
              <strong className="text-sm">Ir a los exámenes</strong>
            </span>
            <ArrowRight className="h-5 w-5 flex-shrink-0 text-rojo" />
          </Link>
        )}
      </div>

      <Toast message={`Lección ${lesson.id} marcada como completada`} show={toast} />
    </div>
  );
}
