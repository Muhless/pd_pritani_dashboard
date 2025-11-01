import BottomDashboardCard from "@/components/card/BottomDashboardCard";
import HeroDashboard from "@/components/card/HeroDashboard";
import MiddleDashboard from "@/components/card/MiddleDashboard";
import Topbar from "@/components/layout/Topbar";

const DashboardPages = () => {
  return (
    <div className="mx-auto w-full h-full space-y-3">
      <Topbar />
      <div className="p-3 bg-background space-y-3">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        {/* card */}
        <HeroDashboard />
        <MiddleDashboard />
        <BottomDashboardCard />
      </div>
    </div>
  );
};

export default DashboardPages;
