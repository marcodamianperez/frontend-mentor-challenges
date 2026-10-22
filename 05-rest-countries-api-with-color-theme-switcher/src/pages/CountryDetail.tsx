import { IoArrowBack } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CountryDetail() {
  const navigate = useNavigate();
  const { countryName } = useParams();
  return (
    <div className="bg-dark-mode-bg text-white text-sm">
      <div className="py-10 w-[85%] mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-dark-mode-element py-1 px-6 rounded-xs shadow mb-16"
        >
          <IoArrowBack />
          <span>Back</span>
        </button>

        <div className="flex flex-col gap-12">
          <img src="https://placehold.co/500x300" alt="flag" />
          <div className="flex flex-col gap-10">
            <h1 className="font-extrabold text-2xl">{countryName}</h1>
            <div className="flex flex-col gap-2.5">
              <p>
                <span className="font-bold">Native Name: </span>Native Name
              </p>
              <p>
                <span className="font-bold">Population: </span>10,000,000
              </p>
              <p>
                <span className="font-bold">Region: </span>Region
              </p>
              <p>
                <span className="font-bold">Sub Region: </span>Sub Region
              </p>
              <p>
                <span className="font-bold">Capital: </span>Capital
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <p>
                <span className="font-bold">Top Level Domain: </span>.domain
              </p>
              <p>
                <span className="font-bold">Currencies: </span>Currencies
              </p>
              <p>
                <span className="font-bold">Languages: </span>Language1, Language2
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-base">Border Countries:</h2>
              <div className="flex gap-2 flex-wrap text-xs">
                <span className="flex items-center gap-2 bg-dark-mode-element py-1 px-6 rounded-xs shadow">
                  Country1
                </span>
                <span className="flex items-center gap-2 bg-dark-mode-element py-1 px-6 rounded-xs shadow">
                  Country2
                </span>
                <span className="flex items-center gap-2 bg-dark-mode-element py-1 px-6 rounded-xs shadow">
                  Country3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
