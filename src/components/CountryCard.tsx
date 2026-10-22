function CountryCard() {
  return (
    <div className="w-[75%] bg-dark-mode-element mx-auto pb-4 rounded-md overflow-hidden">
      <div>
        <img src="https://placehold.co/500x300" alt="flag" />
      </div>
      <div className="p-6 flex flex-col gap-1 text-white">
        <p className="font-extrabold text-lg pb-3">Country Name</p>
        <p>
          <span className="font-semibold">Population: </span>10,000,000
        </p>
        <p>
          <span className="font-semibold">Region: </span>Region
        </p>
        <p>
          <span className="font-semibold">Capital: </span>Capital
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
