import React, { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

const TabsContext = createContext(null);

function Tabs({ value, defaultValue, onValueChange, className, children, ...props }) {
  const [internal, setInternal] = useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  function setValue(v) {
    if (!isControlled) setInternal(v);
    onValueChange && onValueChange(v);
  }

  return (
    <TabsContext.Provider value={{ value: current, setValue }}>
      <div className={cn(className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

function TabsList({ className, children, ...props }) {
  return (
    <div
      className={cn("flex gap-1.5 overflow-x-auto pb-1", className)}
      role="tablist"
      {...props}
    >
      {children}
    </div>
  );
}

function TabsTrigger({ value, className, children, ...props }) {
  const ctx = useContext(TabsContext);
  const active = ctx.value === value;
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => ctx.setValue(value)}
      className={cn(
        "flex-shrink-0 whitespace-nowrap rounded-full border-[1.5px] px-4.5 py-2.5 text-[13px] font-bold transition-all duration-200",
        active
          ? "border-ink bg-ink text-white"
          : "border-line bg-white text-ink-soft hover:border-ink hover:text-ink",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, className, children, ...props }) {
  const ctx = useContext(TabsContext);
  if (ctx.value !== value) return null;
  return (
    <div className={cn("animate-[fadeUp_.4s_ease]", className)} {...props}>
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
