import DashboardCard from "./DashboardCard";

const HeroDashboard = () => {
  return (
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
  );
};

export default HeroDashboard;
