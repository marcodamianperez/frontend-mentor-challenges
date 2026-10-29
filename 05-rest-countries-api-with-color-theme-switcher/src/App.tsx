import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
