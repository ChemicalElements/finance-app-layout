import NavbarBrand from "./NavbarBrand";
import NavbarMenu from "./NavbarMenu";
import NavbarButton from "./NavbarButton";
import { navbarLinks } from "../constants/navbarLinks";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 max-w-5xl m-auto">
      <NavbarBrand />

      <ul className="gap-8 hidden md:flex">
        {navbarLinks.map(({ label, path }) => (
          <li key={path}>{label}</li>
        ))}
      </ul>

      <div className="md:hidden">
        <NavbarButton open={isMenuOpen} onClick={handleMenu} />
        <NavbarMenu className={isMenuOpen ? "" : "left-[-100%]"} />
      </div>
    </nav>
  );
};

export default Navbar;
