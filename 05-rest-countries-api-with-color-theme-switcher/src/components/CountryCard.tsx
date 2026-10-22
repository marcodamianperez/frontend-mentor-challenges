import { Link } from "react-router-dom";

function CountryCard() {
  const countryName = "Country Name";

  return (
    <Link
      to={`/country/${countryName}`}
      className="max-w-3xs sm:max-w-full bg-dark-mode-element mx-auto pb-4 rounded-md overflow-hidden shadow-md"
    >
      <div>
        <img src="https://placehold.co/500x300" alt="flag" />
      </div>
      <div className="p-6 flex flex-col gap-1 text-white">
        <h2 className="font-extrabold text-lg pb-3">Country Name</h2>
        <p>
          <span className="font-bold">Population: </span>10,000,000
        </p>
        <p>
          <span className="font-bold">Region: </span>Region
        </p>
        <p>
          <span className="font-bold">Capital: </span>Capital
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
