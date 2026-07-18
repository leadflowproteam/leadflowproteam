import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200",

    outline:
      "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      disabled={disabled}
      className={[
        baseClasses,
        variants[variant],
        fullWidth ? "w-full" : "",
        disabled ? "cursor-not-allowed opacity-60" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}