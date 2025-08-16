import React from "react";

export type ButtonVariants = "primary" | "secondary" | "success" | "danger";

export interface ButtonComponentProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariants;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}
