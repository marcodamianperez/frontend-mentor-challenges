import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <label
      htmlFor="search"
      className="text-white bg-dark-mode-element px-8 py-4 flex items-center gap-6 rounded-md shadow-md lg:w-md"
    >
      <IoSearch className="text-xl" />
      <input id="search" className="text-inherit outline-none w-full" placeholder="Search for a country..." />
    </label>
  );
}

export default SearchBar;
