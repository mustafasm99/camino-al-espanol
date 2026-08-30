import React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-11 w-full rounded-xl border-[1.5px] border-line bg-white px-3.5 text-sm outline-none transition-colors placeholder:text-ink-soft/60 focus:border-rojo focus:ring-4 focus:ring-rojo/10",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
