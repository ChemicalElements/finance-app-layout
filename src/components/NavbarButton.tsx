import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

type PropsType = {
  open: boolean;
  onClick: () => void;
};

const NavbarButton = ({ open, onClick }: PropsType) => {
  return (
    <button data-cy="navbar-button" onClick={onClick}>
      {open ? (
        <AiOutlineClose className="text-2xl" />
      ) : (
        <AiOutlineMenu className="text-2xl" />
      )}
    </button>
  );
};

export default NavbarButton;
