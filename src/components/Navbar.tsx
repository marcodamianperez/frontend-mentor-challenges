import { IoMoon } from "react-icons/io5";

type NavbarProps = {
  title: string;
};

function Navbar({ title }: NavbarProps) {
  return (
    <header className="bg-dark-mode-element text-white">
      <nav className="flex justify-between w-[90%] m-auto py-8">
        <h1 className="font-extrabold">{title}</h1>
        <button className="font-semibold flex gap-2 items-center">
          <IoMoon />
          <span>Dark Mode</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
