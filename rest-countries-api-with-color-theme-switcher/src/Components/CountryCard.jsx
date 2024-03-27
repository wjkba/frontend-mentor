import { Link } from "react-router-dom";

function CountryCard({ id, flag, name, population, region, capital }) {
  return (
    <Link to={`countries/${id}`} className="country-card">
      <div className="country-card-image">
        <img src={flag} alt={name} />
      </div>
      <div className="country-card-info">
        <h2>{name}</h2>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}
export default CountryCard;
