import React from "react";

interface BaseCardProps {
  label?: string; // optional, kalau mau tampilkan judul
  className?: string; // untuk custom style dari luar
  children?: React.ReactNode; // isi konten card
}

const BaseCard: React.FC<BaseCardProps> = ({
  label,
  className = "",
  children,
}) => {
  return (
    <div className={`bg-white rounded-xl p-4 shadow ${className}`}>
      {label && <h2 className="text-lg font-semibold mb-2">{label}</h2>}
      {children}
    </div>
  );
};

export default BaseCard;
