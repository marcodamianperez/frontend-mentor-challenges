import { Link } from "react-router-dom";
import type { Country } from "../types/country";
import { formatPopulation } from "../services/countries";

type CountryCardProps = {
  country: Country;
};

function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      to={`/country/${country.name}`}
      className="max-w-3xs sm:max-w-full bg-dark-mode-text-light-mode-element dark:bg-dark-mode-element mx-auto pb-4 rounded-md overflow-hidden shadow-sm hover:shadow-md"
    >
      <img src={country.flag} alt={`${country.name} flag`} />

      <div className="p-6 flex flex-col gap-1 text-light-mode-text dark:text-dark-mode-text-light-mode-element">
        <h2 className="font-extrabold text-lg pb-3">{country.name}</h2>
        <p>
          <span className="font-bold">Population: </span>
          {formatPopulation(country.population)}
        </p>
        <p>
          <span className="font-bold">Region: </span>
          {country.region}
        </p>
        {country.capital && (
          <p>
            <span className="font-bold">Capital: </span>
            {country.capital}
          </p>
        )}
      </div>
    </Link>
  );
}

export default CountryCard;
