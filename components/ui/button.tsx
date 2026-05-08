import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-titan-blue text-titan-black shadow-blue-glow hover:bg-sky-300",
        variant === "secondary" &&
          "border border-titan-gold/45 bg-titan-gold/10 text-titan-gold shadow-gold-glow hover:bg-titan-gold/18",
        variant === "ghost" &&
          "border border-white/15 bg-white/[.04] text-white hover:border-titan-blue/45 hover:bg-titan-blue/10",
        className,
      )}
      {...props}
    />
  );
}
