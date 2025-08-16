import Link from "next/link";
import { MenuSidebarComponentProps } from "./MenuSidebar.types";

const MenuSidebarComponent = ({
  children,
  label,
  navigation,
}: MenuSidebarComponentProps) => {
  return (
    <div className="w-64 text-white flex justify-center">
      <Link
        href={navigation}
        className="w-10/12 items-center cursor-pointer flex hover:bg-white gap-3 py-2 px-3 rounded-md hover:text-black transform duration-150"
      >
        <div className="text-2xl">{children}</div>
        <p className="text-sm">{label}</p>
      </Link>
    </div>
  );
};

export default MenuSidebarComponent;
