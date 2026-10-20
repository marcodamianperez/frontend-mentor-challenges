import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="text-sm bg-dark-mode-bg">
      <Navbar title="Where in the world?" />
      <div className="flex flex-col gap-8 my-6 w-[90%] mx-auto">
        <SearchBar />
        <Filter />
      </div>
    </div>
  );
}

export default Home;
