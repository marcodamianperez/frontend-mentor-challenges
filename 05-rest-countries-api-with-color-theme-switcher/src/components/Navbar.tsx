import { IoMoon } from "react-icons/io5";

type NavbarProps = {
  title: string;
};

function Navbar({ title }: NavbarProps) {
  return (
    <header className="bg-dark-mode-element text-white shadow-md text-sm">
      <nav className="flex justify-between w-[90%] max-w-6xl m-auto py-8">
        <span className="font-extrabold sm:text-base lg:text-lg">{title}</span>
        <button className="font-semibold flex gap-2 items-center cursor-pointer">
          <IoMoon />
          <span>Dark Mode</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
