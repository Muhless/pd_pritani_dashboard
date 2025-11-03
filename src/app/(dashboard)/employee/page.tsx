import { ButtonComponent } from "@/components/ui/button/Button";
import { CgAdd } from "react-icons/cg";

const EmployeePages = () => {
  return (
    <div className="bg-background w-full h-full rounded-xl p-3">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">Karyawan</h1>
        <ButtonComponent variant="primary" className="flex items-center">
          <CgAdd /> Tambah
        </ButtonComponent>
      </div>
      <div>
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">No</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>No Telepon</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="text-center">
              <td>01</td>
              <td>Muhta Nuryadi</td>
              <td>Cangkudu</td>
              <td>08871165551</td>
              <td>Aktif</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeePages;
