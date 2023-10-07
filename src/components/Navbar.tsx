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
    <nav className="m-auto flex max-w-5xl items-center justify-between p-4">
      <NavbarBrand />

      <ul className="hidden gap-8 md:flex">
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
