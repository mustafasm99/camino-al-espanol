import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-paper-dim text-ink-soft",
        rojo: "border-rojo/20 bg-rojo/10 text-rojo-deep",
        oro: "border-oro/30 bg-oro/15 text-[#8a6a00]",
        dark: "border-transparent bg-ink text-white",
        outline: "border-line bg-white text-ink-soft",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
