import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface DashboardCardProps {
  title: string;
  content: string;
  description: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  content,
  description,
}) => {
  return (
    <div className="bg-white h-36 p-4 rounded-xl flex flex-col justify-between">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="p-2 bg-white border border-gray-500 rounded-full cursor-pointer">
          <FiArrowUpRight size={15}/>
        </div>
      </div>
      <h2 className="text-5xl">{content}</h2>
      <p className="text-green-600 text-sm">{description}</p>
    </div>
  );
};

export default DashboardCard;
