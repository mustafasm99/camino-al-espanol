import React from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Toast({ message, show }) {
  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-[200] flex -translate-x-1/2 translate-y-32 items-center gap-2.5 rounded-2xl bg-ink px-5.5 py-3.5 text-sm font-bold text-white shadow-lifted transition-transform duration-400",
        show && "translate-y-0"
      )}
    >
      <CheckCircle2 className="h-4 w-4 text-oro-soft" /> {message}
    </div>
  );
}
