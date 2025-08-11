import React from "react";
import { ButtonComponentProps } from "./Button.types";

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  className = "",
  onClick,
  variant = "primary",
  type = "button",
  disabled,
}) => {
  const baseStyle = "px-4 py-2 rounded-md cursor-pointer";
  const variantStyle = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};
