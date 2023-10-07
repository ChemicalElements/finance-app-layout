import NavbarBrand from "./NavbarBrand";
import { navbarLinks } from "../constants/navbarLinks";

type propType = {
  className?: string;
};

const NavbarMenu = ({ className }: propType) => (
  <aside
    data-cy="navbar-menu"
    className={
      className +
      " fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-black p-4 duration-500 ease-in-out"
    }
  >
    <NavbarBrand />
    <ul className="mt-8 flex flex-col gap-4 uppercase [&>li]:border-b [&>li]:border-b-gray-800 [&>li]:p-4">
      {navbarLinks.map(({ label, path }) => (
        <li key={path}>{label}</li>
      ))}
    </ul>
  </aside>
);

export default NavbarMenu;
