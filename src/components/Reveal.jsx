import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function Reveal({ children, delay = 0, y = 22, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    anime.set(el, { opacity: 0, translateY: y });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: el,
            opacity: [0, 1],
            translateY: [y, 0],
            duration: 650,
            delay,
            easing: "easeOutCubic",
          });
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
