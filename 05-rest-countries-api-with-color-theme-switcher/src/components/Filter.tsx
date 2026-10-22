import { IoChevronDown } from "react-icons/io5";

function Filter() {
  return (
    <div className="relative text-white">
      <select className="bg-dark-mode-element px-8 py-4 rounded-md appearance-none w-full outline-none">
        <option hidden disabled value="">
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <IoChevronDown className="absolute right-6 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default Filter;
