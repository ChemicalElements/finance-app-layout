import NavbarBrand from "./NavbarBrand";
import { navbarLinks } from "../constants/navbarLinks";

type propType = {
  className?: string;
};

const NavbarMenu = ({ className }: propType) => (
  <aside
    className={
      className +
      " fixed bg-black top-0 left-0 w-[60%] h-full border-r border-r-gray-900 p-4 ease-in-out duration-500"
    }
  >
    <NavbarBrand />
    <ul className="mt-8 flex flex-col gap-4 uppercase [&>li]:border-b [&>li]:p-4 [&>li]:border-b-gray-800">
      {navbarLinks.map(({ label, path }) => (
        <li key={path}>{label}</li>
      ))}
    </ul>
  </aside>
);

export default NavbarMenu;
