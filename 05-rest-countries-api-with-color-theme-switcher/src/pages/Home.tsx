import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="text-sm bg-dark-mode-bg">
      <div className="flex flex-col gap-8 py-8 w-[90%] mx-auto">
        <SearchBar />
        <Filter />
      </div>
      <div className="flex flex-col gap-12 pb-12">
        <CountryCard />
        <CountryCard />
      </div>
    </div>
  );
}

export default Home;
