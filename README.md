# 🇪🇸 Camino al Español — Curso A1 interactivo

Proyecto React (Vite) con componentes al estilo **shadcn/ui** (Button, Card, Badge,
Tabs, Accordion, Progress, Input, Separator — código propio, sin dependencia de
Radix) y animaciones con **anime.js**. Colores inspirados en la bandera de España
(rojo `#AA151B` + oro `#F1BF00`).

## 🗂️ Estructura

```
src/
  components/
    ui/              → primitivos estilo shadcn (button, card, badge, tabs, accordion, progress, input, separator)
    Header.jsx        → cabecera con anillo de progreso
    Sidebar.jsx        → tabla de contenidos / navegación (drawer en móvil)
    Layout.jsx         → shell general (header + sidebar + <Outlet/>)
    PathTrail.jsx       → "camino" de 12 paradas animado con anime.js
    FlashCard.jsx        → tarjeta de vocabulario con flip 3D (anime.js)
    PhraseList.jsx        → frases clave + audio (Web Speech API)
    Quiz.jsx               → cuestionario interactivo con feedback animado
    Homework.jsx             → checklist de tareas persistente
    Reveal.jsx                → scroll-reveal genérico con anime.js
    Toast.jsx                  → notificación flotante
  context/
    ProgressContext.jsx        → estado global de progreso (localStorage)
  data/
    lessons.js                  → las 12 lecciones completas (objetivos, vocabulario, frases, quiz, tarea)
    exam.js                      → examen intermedio + examen final estilo DELE A1
    resources.js                  → webs de práctica, canciones e ideas de imágenes
  pages/
    Home.jsx                       → hero + camino + tabla de contenidos
    Lesson.jsx                      → vista de lección con pestañas
    Exam.jsx                         → exámenes y rúbricas
    Resources.jsx                     → recursos externos
  App.jsx                              → rutas (react-router-dom)
  main.jsx                              → punto de entrada
```

## ▶️ Cómo ejecutar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # build de producción en /dist
npm run preview     # sirve el build de producción
```

## 🧭 Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Portada + camino de 12 paradas + tabla de contenidos completa |
| `/lesson/:id` | Lección con pestañas: Objetivos · Vocabulario · Frases clave · Práctica · Tarea |
| `/exam` | Examen intermedio y examen final (estilo DELE A1) con rúbricas |
| `/resources` | Webs de práctica, playlist y bancos de imágenes |

## 💾 Persistencia

El progreso (lecciones completadas y tareas marcadas) se guarda en `localStorage`
del navegador — no requiere backend.

## 🎨 Paleta

| Token | Valor | Uso |
| --- | --- | --- |
| `rojo` | `#AA151B` | Acento principal, botones primarios |
| `oro` | `#F1BF00` | Acento secundario, hitos completados |
| `ink` | `#181615` | Texto y fondos oscuros |
| `paper` | `#FBF7EE` | Fondo general |

## ✨ Animaciones (anime.js)

- Entrada escalonada del hero (`timeline`).
- Efecto máquina de escribir en el titular.
- "Camino" de lecciones con `stagger` + `easeOutBack`.
- Flip 3D de las tarjetas de vocabulario (`rotateY`).
- Sacudida/rebote al responder el quiz.
- Scroll-reveal genérico (`Reveal.jsx`) con `IntersectionObserver`.
