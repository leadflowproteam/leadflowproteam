import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "white";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type,
  ...props
}: ButtonProps) {
  const base = [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-2xl",
    "font-semibold",
    "whitespace-nowrap",
    "transition-all",
    "duration-300",
    "ease-out",
    "select-none",
    "min-h-[48px]",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-60",
  ].join(" ");

  const variants = {
    primary: [
      "bg-blue-600",
      "text-white",
      "shadow-md",
      "hover:bg-blue-700",
      "hover:-translate-y-1",
      "hover:shadow-xl",
      "active:translate-y-0",
    ].join(" "),

    secondary: [
      "bg-slate-100",
      "text-slate-900",
      "hover:bg-slate-200",
      "hover:-translate-y-1",
      "shadow-sm",
      "hover:shadow-lg",
    ].join(" "),

    outline: [
      "border",
      "border-blue-600",
      "bg-transparent",
      "text-blue-600",
      "hover:bg-blue-600",
      "hover:text-white",
      "hover:-translate-y-1",
      "shadow-sm",
      "hover:shadow-lg",
    ].join(" "),

    white: [
      "bg-white",
      "text-blue-700",
      "shadow-md",
      "hover:bg-slate-100",
      "hover:-translate-y-1",
      "hover:shadow-xl",
    ].join(" "),
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  return (
    <button
      type={type ?? "button"}
      className={[
        base,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}