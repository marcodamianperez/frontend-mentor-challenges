import { IoChevronDown } from "react-icons/io5";

type FilterProps = {
  selectedRegion: string;
  onHandleRegion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Filter({ selectedRegion, onHandleRegion }: FilterProps) {
  return (
    <div className="relative text-light-mode-input dark:text-dark-mode-text-light-mode-element">
      <select
        className="bg-dark-mode-text-light-mode-element dark:bg-dark-mode-element px-8 pr-14 py-4 rounded-md appearance-none w-full outline-none shadow-sm hover:shadow-md"
        value={selectedRegion}
        name="selectedRegion"
        onChange={onHandleRegion}
      >
        <option hidden disabled value="filterByRegion">
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <IoChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}

export default Filter;
