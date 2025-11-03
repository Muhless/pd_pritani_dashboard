"use client";

import { Store } from "lucide-react";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { CiCircleList, CiLogout } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import MenuSidebarComponent from "../ui/menu/MenuSidebar";

const SidebarComponent = () => {
  return (
    <div className="w-64 bg-primary h-screen shadow-2xs">
      <div className="flex flex-col items-center justify-center p-5">
        <Image
          src="/logo-pritani.png"
          alt="logo pritani"
          width={70}
          height={100}
        />
        <p className="text-white font-sans text-xl">PG. Pritani</p>
      </div>
      <div className="space-y-2 mt-2">
        <MenuSidebarComponent label="Halaman Utama" navigation="/dashboard">
          <MdDashboard />
        </MenuSidebarComponent>
        <MenuSidebarComponent label="Karyawan" navigation="/employee">
          <LuUsers />
        </MenuSidebarComponent>
        <MenuSidebarComponent label="Pelanggan" navigation="/customer">
          <BiUser />
        </MenuSidebarComponent>
        <MenuSidebarComponent label="Produk" navigation="/product">
          <Store />
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
