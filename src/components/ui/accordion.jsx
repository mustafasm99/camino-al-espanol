import React, { createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = createContext(null);
const ItemContext = createContext(null);

function Accordion({ type = "single", className, children, ...props }) {
  const [open, setOpen] = useState(() => (type === "multiple" ? [] : null));

  function toggle(value) {
    if (type === "multiple") {
      setOpen((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
    } else {
      setOpen((prev) => (prev === value ? null : value));
    }
  }

  function isOpen(value) {
    return type === "multiple" ? open.includes(value) : open === value;
  }

  return (
    <AccordionContext.Provider value={{ toggle, isOpen }}>
      <div className={cn("flex flex-col gap-3", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ value, className, children, ...props }) {
  return (
    <ItemContext.Provider value={value}>
      <div className={cn("overflow-hidden rounded-2xl border border-line bg-white", className)} {...props}>
        {children}
      </div>
    </ItemContext.Provider>
  );
}

function AccordionTrigger({ className, children, ...props }) {
  const { toggle, isOpen } = useContext(AccordionContext);
  const value = useContext(ItemContext);
  const open = isOpen(value);
  return (
    <button
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-[15px] font-bold text-ink hover:bg-paper-dim/60",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className={cn("h-4 w-4 flex-shrink-0 text-rojo transition-transform duration-300", open && "rotate-180")} />
    </button>
  );
}

function AccordionContent({ className, children, ...props }) {
  const { isOpen } = useContext(AccordionContext);
  const value = useContext(ItemContext);
  const open = isOpen(value);
  return (
    <div
      className="grid transition-all duration-300 ease-out"
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <div className={cn("px-5 pb-5 text-sm leading-relaxed text-ink-soft", className)} {...props}>
          {children}
        </div>
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
