export const MIDTERM = {
  title: "Examen intermedio — Semanas 1 y 2",
  subtitle: "Cubre las lecciones 1 a 8: identidad, números, artículos, tiempo, casa y SER/ESTAR/TENER.",
  duration: "60–75 min",
  total: 70,
  parts: [
    {
      name: "Comprensión auditiva",
      points: 15,
      icon: "🎧",
      description: "El profesor lee un texto dos veces; el alumno responde preguntas de verdadero/falso y opción múltiple.",
      sample: [
        "¿Cómo se llama la persona del audio?",
        "¿Cuántos años tiene?",
        "¿De dónde es?",
        "¿Qué hay en su habitación?",
      ],
    },
    {
      name: "Comprensión lectora",
      points: 15,
      icon: "📖",
      description: "Lectura de un texto breve sobre una persona y su casa, con preguntas de comprensión y una tabla para completar.",
      sample: [
        "¿Dónde vive Carlos?",
        "¿Qué estudia?",
        "¿Cuántas habitaciones hay en su piso?",
        "¿Dónde está la cama?",
      ],
    },
    {
      name: "Expresión escrita",
      points: 20,
      icon: "✍️",
      description: "Redacción personal de 60–80 palabras: nombre, edad, nacionalidad, vivienda, idiomas y estudios/trabajo.",
      sample: [
        "Incluye: nombre, edad, nacionalidad",
        "Incluye: dónde vives y con quién",
        "Incluye: idiomas que hablas",
        "Incluye: qué estudias o a qué te dedicas",
      ],
    },
    {
      name: "Expresión oral",
      points: 20,
      icon: "🗣️",
      description: "Presentación personal de 30–45 s + 5 preguntas del examinador sobre datos personales y una simulación breve.",
      sample: [
        "¿Cómo te llamas y cuántos años tienes?",
        "¿De dónde eres y dónde vives?",
        "¿Qué idiomas hablas?",
        "Simula: conocer a alguien nuevo en una academia.",
      ],
    },
  ],
  grading: [
    { range: "90–100", label: "Excelente ⭐" },
    { range: "80–89", label: "Muy bien" },
    { range: "70–79", label: "Bien" },
    { range: "60–69", label: "Aprobado" },
    { range: "0–59", label: "Necesita mejorar" },
  ],
};

export const FINAL_EXAM = {
  title: "Examen final A1 — estilo DELE",
  subtitle:
    "Evaluación de cierre de las 12 lecciones, inspirada en la estructura del DELE A1: cuatro destrezas con el mismo peso.",
  duration: "≈1 h 45 min + entrevista oral",
  total: 100,
  parts: [
    {
      name: "Comprensión de lectura",
      points: 25,
      icon: "📖",
      description: "25 preguntas repartidas en 5 tareas: mensajes cortos, anuncios de precios, un texto sobre una familia y frases sueltas para completar con SER/ESTAR/TENER/HAY.",
      sample: [
        "Mensajes personales (verdadero/falso y opción múltiple)",
        "Anuncio de supermercado con precios",
        "Texto sobre una familia con tabla comparativa",
        "Elegir la respuesta lógica a una pregunta",
        "HAY / ESTÁ / SON / TIENE en contexto",
      ],
    },
    {
      name: "Comprensión auditiva",
      points: 25,
      icon: "🎧",
      description: "5 audios cortos (información personal, restaurante, la casa, gustos y tiempo libre, compras) leídos dos veces por el profesor.",
      sample: [
        "Presentación personal de una estudiante",
        "Diálogo completo en un restaurante",
        "Descripción de un piso",
        "Gustos y aficiones de un chico",
        "Compra de ropa en una tienda",
      ],
    },
    {
      name: "Expresión escrita",
      points: 25,
      icon: "✍️",
      description: "Dos tareas: un mensaje personal de 60–80 palabras y una descripción de una persona de 80–100 palabras.",
      sample: [
        "Mensaje a un amigo sobre tu nueva ciudad",
        "Descripción de un familiar: físico, personalidad, gustos",
      ],
    },
    {
      name: "Expresión e interacción oral",
      points: 25,
      icon: "🗣️",
      description: "Presentación personal, un tema a elegir por tarjeta (familia, casa, tiempo libre, comida, ciudad) y una simulación con el examinador.",
      sample: [
        "Presentación personal (1–2 min)",
        "Tarjeta temática (familia / casa / aficiones / comida / ciudad)",
        "Simulación: restaurante, tienda o conocer a alguien",
      ],
    },
  ],
  grading: [
    { range: "90–100", label: "A1 excelente ⭐⭐⭐⭐⭐" },
    { range: "80–89", label: "A1 muy sólido ⭐⭐⭐⭐" },
    { range: "70–79", label: "A1 bueno ⭐⭐⭐" },
    { range: "60–69", label: "A1 aceptable, requiere repaso" },
    { range: "0–59", label: "Repetir algunas unidades" },
  ],
};

export const ORAL_CARDS = [
  { title: "Mi familia", points: ["Miembros de la familia", "Edad y aspecto físico", "Personalidad"] },
  { title: "Mi casa", points: ["Tipo de vivienda", "Habitaciones", "Muebles y su ubicación"] },
  { title: "Mi tiempo libre", points: ["Aficiones", "Lo que te gusta / no te gusta", "Preferencias"] },
  { title: "La comida", points: ["Comida favorita", "Bebidas", "Pedir en un restaurante"] },
  { title: "Mi ciudad", points: ["Dónde vives", "Lugares de la ciudad", "Qué te gusta de allí"] },
];
