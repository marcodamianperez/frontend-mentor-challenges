import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import type { Country } from "../types/country";
import { fetchCountries, formatPopulation, fallBackText } from "../services/countries";

function CountryDetail() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    async function getCountries() {
      try {
        const countriesData = await fetchCountries();
        setCountries(countriesData || []);
      } catch (error) {
        console.error("Error al cargar el país", error);
      } finally {
        setLoading(false);
      }
    }
    getCountries();
  }, []);

  const country = countries.find((c) => c.alpha3Code === name);

  if (loading) {
    return <p className="text-center mt-20">Cargando país...</p>;
  }

  if (!country) {
    return <p className="text-center mt-20">País no encontrado</p>;
  }

  return (
    <div className="bg-light-mode-bg dark:bg-dark-mode-bg text-light-mode-text dark:text-white text-sm min-h-screen">
      <div className="py-10 w-[85%] max-w-6xl mx-auto sm:w-[90%] md:py-18">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-dark-mode-text-light-mode-element dark:bg-dark-mode-element py-1 px-6 rounded-xs shadow-sm hover:shadow-md mb-16 cursor-pointer md:py-2"
        >
          <IoArrowBack />
          <span>Back</span>
        </button>

        <div className="flex flex-col gap-12 md:flex-row md:gap-18 md:justify-between lg:gap-26">
          <img src={country.flag} alt={`${country.name} flag`} className="max-w-md shadow-sm" />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <h1 className="font-extrabold text-2xl lg:col-span-full">{country.name}</h1>
            <div className="flex flex-col gap-2.5">
              <p>
                <span className="font-bold">Native Name: </span>
                {country.nativeName || fallBackText()}
              </p>

              <p>
                <span className="font-bold">Population: </span>
                {formatPopulation(country.population)}
              </p>
              <p>
                <span className="font-bold">Region: </span>
                {country.region}
              </p>

              <p>
                <span className="font-bold">Sub Region: </span>
                {country.subregion || fallBackText()}
              </p>

              <p>
                <span className="font-bold">Capital: </span>
                {country.capital || fallBackText()}
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <p>
                <span className="font-bold">Top Level Domain: </span>
                {country.topLevelDomain?.join(", ") || fallBackText()}
              </p>

              <p>
                <span className="font-bold">Currencies: </span>
                {country.currencies?.map((currency) => currency.name).join(", ") || fallBackText()}
              </p>

              <p>
                <span className="font-bold">Languages: </span>
                {country.languages?.map((lan) => lan.name).join(", ") || fallBackText()}
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-full lg:flex-row items-center">
              <h2 className="font-bold text-base">Border Countries:</h2>
              {!country.borders || country.borders.length === 0 ? (
                <span>{fallBackText()}</span>
              ) : (
                <div className="flex gap-2 flex-wrap text-xs">
                  {country.borders.map((borderCode) => {
                    const borderCountry = countries.find((c) => c.alpha3Code === borderCode);

                    return (
                      <Link
                        key={borderCode}
                        to={`/country/${borderCountry?.alpha3Code}`}
                        className="flex items-center gap-2 bg-dark-mode-text-light-mode-element dark:bg-dark-mode-element py-1 px-6 rounded-xs shadow-sm hover:shadow-md cursor-pointer"
                      >
                        {borderCountry ? borderCountry.name : borderCode}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
