import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
