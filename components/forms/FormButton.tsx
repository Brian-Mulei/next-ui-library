import React from "react";

type ButtonVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary hover:bg-primary-hover text-white",
  secondary: "bg-secondary hover:bg-secondary-hover text-white",
  success: "bg-success hover:bg-success-hover text-white",
  warning: "bg-warning hover:bg-warning-hover text-white",
  danger: "bg-danger hover:bg-danger-hover text-white",
  neutral: "bg-neutral hover:bg-neutral-hover text-white",
};

export default function Button({
  title,
  variant = "primary",
  onClick,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded font-semibold transition-colors
        ${variantClasses[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      {...props}
    >
      {title}
    </button>
  );
}
