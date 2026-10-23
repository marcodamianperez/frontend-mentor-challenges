import { useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

type NavbarProps = {
  title: string;
};

function Navbar({ title }: NavbarProps) {
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains("dark"));

  function toggleDarkMode() {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  return (
    <header className="bg-light-mode-bg dark:bg-dark-mode-element text-light-mode-text dark:text-dark-mode-text-light-mode-element shadow-sm text-sm relative">
      <nav className="flex justify-between w-[90%] max-w-6xl m-auto py-8">
        <Link to="/" className="font-extrabold sm:text-base lg:text-lg">
          {title}
        </Link>
        <button className="font-semibold flex gap-2 items-center cursor-pointer" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <>
              <IoSunnyOutline /> <span>Light Mode</span>
            </>
          ) : (
            <>
              <IoMoonOutline />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
