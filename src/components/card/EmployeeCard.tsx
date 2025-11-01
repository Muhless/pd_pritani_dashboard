import Image from "next/image";

const EmployeeCard = () => {
  return (
    <div className="bg-card rounded-xl p-3 h-full flex text-center space-x-3">
      <div className="h-10 w-10 relative">
        <Image
          src={"/images/1.jpg"}
          alt="employee picture"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="text-start">
        <h1 className="font-bold leading-tight">Muhta Nuryadi</h1>
        <h2 className="text-sm leading-tight text-gray-600">Hadir</h2>
      </div>
    </div>
  );
};

export default EmployeeCard;
