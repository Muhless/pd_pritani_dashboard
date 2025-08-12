import React from "react";
import { ButtonComponentProps } from "./Button.types";

export const AlternatifLoginButton: React.FC<ButtonComponentProps> = ({
  children,
}) => {
  return (
    <button className="p-1 text-2xl bg-gray-200 cursor-pointer hover:text-blue-600 rounded-full">
      {children}
    </button>
  );
};
