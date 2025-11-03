import IncomeGraphic from "../chart/IncomeGraphic";
import EmployeeCard from "./EmployeeCard";
import TotalTransaction from "./TotalTransaction";

const MiddleDashboard = () => {
  return (
    <div className="grid grid-cols-4 space-x-3 ">
      <div className="col-span-2">
        <IncomeGraphic />
      </div>
      <TotalTransaction />
      <EmployeeCard />
    </div>
  );
};

export default MiddleDashboard;
