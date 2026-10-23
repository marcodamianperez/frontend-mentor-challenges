import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <label
      htmlFor="search"
      className="text-light-mode-input dark:text-dark-mode-text-light-mode-element bg-dark-mode-text-light-mode-element dark:bg-dark-mode-element px-8 py-4 flex items-center gap-6 rounded-md shadow-sm hover:shadow-md lg:w-md"
    >
      <IoSearch className="text-xl" />
      <input
        id="search"
        className="outline-none w-full md:text-base placeholder:text-light-mode-input"
        placeholder="Search for a country..."
      />
    </label>
  );
}

export default SearchBar;
