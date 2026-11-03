import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { fetchCountries } from "../services/countries";
import type { Country } from "../types/country";
import Pagination from "../components/Pagination";

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("filterByRegion");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function getCountries() {
      try {
        const countries = await fetchCountries();
        setCountries(countries);
      } catch (error) {
        console.error("Error al cargar los países", error);
      } finally {
        setLoading(false);
      }
    }
    getCountries();
  }, []);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    setCurrentPage(1);
  }

  function handleRegion(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedRegion(e.target.value);
    setCurrentPage(1);
  }

  const filteredCountries = countries.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(input.toLowerCase());
    const matchesRegion =
      selectedRegion === "filterByRegion" || c.region.toLowerCase() === selectedRegion.toLowerCase();
    return matchesSearch && matchesRegion;
  });

  const ITEMS_PER_PAGE = 8;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE; // 3 * 10 = 30
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE; // 30 - 10 == 20
  const currentCountries = filteredCountries.slice(indexOfFirstItem, indexOfLastItem); // slice(20, 30];
  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);

  return (
    <div className="text-sm bg-light-mode-bg dark:bg-dark-mode-bg py-8 flex flex-col gap-12 min-h-screen">
      <div className="flex flex-col gap-8 w-[90%] max-w-6xl mx-auto sm:flex-row sm:justify-between">
        <SearchBar input={input} onHandleInput={handleInput} />
        <Filter selectedRegion={selectedRegion} onHandleRegion={handleRegion} />
      </div>
      {loading ? (
        <p className="text-light-mode-text dark:text-dark-mode-text-light-mode-element italic text-2xl opacity-50">
          Loading countries...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-14 gap-10 w-[90%] max-w-6xl mx-auto">
          {!currentCountries.length && (
            <p className="text-light-mode-text dark:text-dark-mode-text-light-mode-element italic text-2xl opacity-50">
              No matches
            </p>
          )}
          {currentCountries.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </div>
      )}

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  );
}

export default Home;
