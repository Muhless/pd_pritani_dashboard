import Image from "next/image";
import { CiCircleList, CiHome, CiLogout, CiUser } from "react-icons/ci";
import { PiStorefrontLight } from "react-icons/pi";
import MenuSidebarComponent from "../ui/menu/MenuSidebar";

const SidebarComponent = () => {
  return (
    <div className="w-64 bg-third h-screen shadow-2xs">
      <div className="flex flex-col items-center justify-center p-5">
        <Image
          src="/logo-pritani.png"
          alt="logo pritani"
          width={70}
          height={100}
        />
        <p className="text-white font-sans text-xl">Ady Trans Jaya</p>
      </div>
      <div className="space-y-2 mt-2">
        <MenuSidebarComponent label="Halaman Utama" navigation="/dashboard">
          <CiHome />
        </MenuSidebarComponent>
        <MenuSidebarComponent label="Pelanggan" navigation="/customer">
          <CiUser />
        </MenuSidebarComponent>
        <MenuSidebarComponent label="Produk" navigation="/product">
          <PiStorefrontLight />
        </MenuSidebarComponent>
        <MenuSidebarComponent label="Transaksi" navigation="/transaction">
          <CiCircleList />
        </MenuSidebarComponent>
      </div>
      <div className="">
        <MenuSidebarComponent label="Keluar" navigation="/#">
          <CiLogout />
        </MenuSidebarComponent>
      </div>
    </div>
  );
};

export default SidebarComponent;
