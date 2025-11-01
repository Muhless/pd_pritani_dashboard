import { Plus } from "lucide-react";
import OrderCard from "./OrderCard";

const BottomDashboardCard = () => {
  return (
    <div className="bg-card w-full h-full p-3 rounded-xl">
      <div className="flex justify-between items-center text-center">
        <h1 className="font-bold text-xl">Pesanan</h1>
        <div className="flex space-x-2 items-center border border-black px-5 py-2 rounded-full cursor-pointer hover:bg-green-600 hover:text-white">
          <Plus size={13} />
          <h1 className="text-sm">Tambah Pesanan</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 space-x-3">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default BottomDashboardCard;
