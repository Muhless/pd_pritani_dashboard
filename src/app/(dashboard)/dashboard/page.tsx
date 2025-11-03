import BottomDashboardCard from "@/components/card/BottomDashboardCard";
import HeroDashboard from "@/components/card/HeroDashboard";
import MiddleDashboard from "@/components/card/MiddleDashboard";
import Topbar from "@/components/layout/Topbar";

const DashboardPages = () => {
  return (
    <div className="mx-auto w-full h-full space-y-3">
      <Topbar />
      <div className="p-3 bg-background space-y-3 rounded-xl">
        <div>
          <h1 className="text-4xl font-bold leading-tight">Dashboard</h1>
          <p className="text-sm text-primary leading-tight">
            Selamat datang di dashboard Penggilingan Padi Pritani
          </p>
        </div>
        {/* card */}
        <HeroDashboard />
        <MiddleDashboard />
        <BottomDashboardCard />
      </div>
    </div>
  );
};

export default DashboardPages;
