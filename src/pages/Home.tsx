import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="text-sm bg-dark-mode-bg">
      <Navbar title="Where in the world?" />
      <SearchBar />
      <Filter />
    </div>
  );
}

export default Home;
