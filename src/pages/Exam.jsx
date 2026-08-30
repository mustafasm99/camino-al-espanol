import React from "react";
import { GraduationCap, Clock, Target } from "lucide-react";
import { MIDTERM, FINAL_EXAM, ORAL_CARDS } from "@/data/exam";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";

function ExamBlock({ exam }) {
  return (
    <div>
      <Reveal>
        <Card className="mb-6 overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-rojo to-oro" />
          <CardContent className="pt-6">
            <h3 className="font-display text-2xl font-bold">{exam.title}</h3>
            <p className="mt-2 max-w-[70ch] text-[14.5px] leading-relaxed text-ink-soft">{exam.subtitle}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="rojo"><Clock className="mr-1 h-3 w-3" /> {exam.duration}</Badge>
              <Badge variant="oro"><Target className="mr-1 h-3 w-3" /> {exam.total} puntos totales</Badge>
            </div>
          </CardContent>
        </Card>
      </Reveal>

      <Accordion type="single" className="mb-6">
        {exam.parts.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <AccordionItem value={p.name}>
              <AccordionTrigger>
                <span className="flex items-center gap-3">
                  <span className="text-lg">{p.icon}</span>
                  {p.name}
                  <Badge variant="outline" className="ml-1">{p.points} pts</Badge>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">{p.description}</p>
                <div className="mb-3">
                  <Progress value={(p.points / exam.total) * 100} />
                </div>
                <ul className="flex flex-col gap-1.5">
                  {p.sample.map((s, si) => (
                    <li key={si} className="flex items-start gap-2 text-[13px]">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rojo" /> {s}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Reveal>
        ))}
      </Accordion>

      <Reveal>
        <Card className="p-5">
          <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-ink-soft">Escala de calificación</h4>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
            {exam.grading.map((g) => (
              <div key={g.range} className="rounded-xl border border-line bg-paper-dim p-3 text-center">
                <div className="font-mono text-[13px] font-extrabold text-rojo-deep">{g.range}</div>
                <div className="mt-1 text-[11.5px] font-semibold text-ink-soft">{g.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </div>
  );
}

export default function Exam() {
  return (
    <div>
      <Reveal>
        <div className="mb-7 flex items-center gap-3">
          <GraduationCap className="h-7 w-7 text-rojo" />
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Exámenes y evaluación</h2>
            <p className="text-sm text-ink-soft">Un examen intermedio (lecciones 1–8) y un examen final de estilo DELE A1.</p>
          </div>
        </div>
      </Reveal>

      <Tabs defaultValue="final" className="mb-8">
        <TabsList>
          <TabsTrigger value="midterm">📋 Examen intermedio</TabsTrigger>
          <TabsTrigger value="final">🏆 Examen final (estilo DELE)</TabsTrigger>
        </TabsList>
        <TabsContent value="midterm"><ExamBlock exam={MIDTERM} /></TabsContent>
        <TabsContent value="final"><ExamBlock exam={FINAL_EXAM} /></TabsContent>
      </Tabs>

      <Reveal>
        <h3 className="mb-4 text-xl font-bold">🃏 Tarjetas para la parte oral</h3>
        <p className="mb-4 max-w-[70ch] text-sm text-ink-soft">
          En el examen final, el alumno saca una tarjeta al azar y habla 1–2 minutos sobre el tema, cubriendo los
          puntos indicados.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ORAL_CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 50}>
            <Card className="h-full p-5">
              <h4 className="mb-3 font-display text-lg font-bold text-rojo-deep">🎴 {c.title}</h4>
              <ul className="flex flex-col gap-2">
                {c.points.map((p, pi) => (
                  <li key={pi} className="flex items-start gap-2 text-[13.5px]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oro" /> {p}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
