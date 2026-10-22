import { useParams } from "react-router-dom";

function CountryDetail() {
  const { countryName } = useParams();
  return <div>Detail of: {countryName}</div>;
}

export default CountryDetail;
