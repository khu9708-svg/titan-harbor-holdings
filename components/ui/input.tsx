import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "focus-ring min-h-12 w-full rounded-md border border-white/12 bg-black/28 px-4 text-sm text-white placeholder:text-slate-500",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "focus-ring min-h-32 w-full resize-y rounded-md border border-white/12 bg-black/28 px-4 py-3 text-sm text-white placeholder:text-slate-500",
        className,
      )}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "focus-ring min-h-12 w-full rounded-md border border-white/12 bg-black/28 px-4 text-sm text-white",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
