import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
};

function Card({
  children,
  hover = true,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        ${
          hover
            ? "hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            : ""
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

type CardSectionProps = {
  children: ReactNode;
  className?: string;
};

function Header({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <div className={`p-8 pb-0 ${className}`}>
      {children}
    </div>
  );
}

function Body({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <div className={`p-8 ${className}`}>
      {children}
    </div>
  );
}

function Footer({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <div
      className={`border-t border-gray-100 p-8 pt-6 ${className}`}
    >
      {children}
    </div>
  );
}

function Title({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <h3
      className={`text-2xl font-bold tracking-tight text-gray-900 ${className}`}
    >
      {children}
    </h3>
  );
}

function Description({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <p
      className={`mt-4 leading-7 text-gray-600 ${className}`}
    >
      {children}
    </p>
  );
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Title = Title;
Card.Description = Description;

export default Card;