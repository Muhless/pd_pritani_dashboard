import DashboardCard from "@/components/card/DashboardCard";
import Topbar from "@/components/layout/Topbar";

const DashboardPages = () => {
  return (
    <div className="mx-auto w-full h-full space-y-3">
      <Topbar />
      <div className="p-3 bg-gray-100 space-y-3">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        {/* card */}
        <div className="grid grid-cols-4 space-x-3">
          <DashboardCard
            title="Transaksi"
            content="12"
            description="Transaksi berlangsung"
          />
          <DashboardCard
            title="Stok"
            content="12"
            description="Transaksi berlangsung"
          />
          <DashboardCard
            title="Pesanan"
            content="12"
            description="Transaksi berlangsung"
          />
          <DashboardCard
            title="Pelanggan"
            content="12"
            description="Transaksi berlangsung"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPages;
