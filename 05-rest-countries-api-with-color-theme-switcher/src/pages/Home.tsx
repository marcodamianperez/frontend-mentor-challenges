import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { fetchCountries } from "../services/countries";
import type { Country } from "../types/country";

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("filterByRegion");

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
  }

  function handleRegion(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedRegion(e.target.value);
  }

  const filteredCountries = countries.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(input.toLowerCase());
    const matchesRegion =
      selectedRegion === "filterByRegion" || c.region.toLowerCase() === selectedRegion.toLowerCase();
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="text-sm bg-light-mode-bg dark:bg-dark-mode-bg py-8 flex flex-col gap-12">
      <div className="flex flex-col gap-8 w-[90%] max-w-6xl mx-auto sm:flex-row sm:justify-between">
        <SearchBar input={input} onHandleInput={handleInput} />
        <Filter selectedRegion={selectedRegion} onHandleRegion={handleRegion} />
      </div>
      {loading ? (
        <p>Cargando países...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-14 gap-10 w-[90%] max-w-6xl mx-auto">
          {filteredCountries.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
