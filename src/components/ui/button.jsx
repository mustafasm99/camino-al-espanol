import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rojo focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[.97]",
  {
    variants: {
      variant: {
        default: "bg-rojo text-white shadow-[0_10px_24px_rgba(170,21,27,.32)] hover:bg-rojo-deep hover:-translate-y-0.5",
        gold: "bg-oro text-ink shadow-[0_10px_24px_rgba(241,191,0,.35)] hover:bg-oro-soft hover:-translate-y-0.5",
        outline: "border-[1.5px] border-line text-ink bg-white hover:border-ink hover:-translate-y-0.5",
        ghost: "bg-transparent text-ink hover:bg-paper-dim",
        dark: "bg-ink text-white hover:bg-black hover:-translate-y-0.5",
        link: "text-rojo underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-9 w-9 rounded-full p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild, children, ...props }, ref) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      className: cn(buttonVariants({ variant, size }), className, children.props.className),
      ...props,
    });
  }
  return (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
