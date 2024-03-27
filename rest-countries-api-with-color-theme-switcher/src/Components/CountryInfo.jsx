import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import Navbar from "./Navbar";

export default function CountryInfo() {
  const params = useParams();
  let navigate = useNavigate();

  const country = data.find(
    (item, index) => index === parseInt(params.countryId)
  );
  const borderCodes = country.borders ? country.borders : [];
  const borderCountries = borderCodes.map((code) => {
    let b = [];
    b = data.find((item) => item.alpha3Code === code);
    b.id = data.findIndex((item) => item.alpha3Code === code);
    return b;
  });

  return (
    <>
      <Navbar />
      <button className="back-btn" onClick={() => navigate(-1)}>
        <i class="fa-solid fa-arrow-left"></i>
        <p>Back</p>
      </button>
      <div className="grid-center">
        <div className="country">
          <div className="country-flag">
            <img src={country.flag} alt="" />
          </div>
          <div className="country-info">
            <h1>{country.name}</h1>
            <p>
              <b>Native Name: </b>
              <span>{country.nativeName}</span>
            </p>
            <p>
              <b>Population: </b>
              <span>{country.population}</span>
            </p>
            <p>
              <b>Region: </b>
              <span>{country.region}</span>
            </p>
            <p>
              <b>Sub Region: </b>
              <span>{country.subregion}</span>
            </p>
            <p>
              <b>Capital: </b>
              <span>{country.capital}</span>
            </p>
            <div style={{ marginTop: "2.5rem" }}>
              <p>
                <b>Top Level Domain: </b>
                <span>{country.topLevelDomain}</span>
              </p>
              <p>
                <b>Currencies: </b>
                {country.currencies.map((item, id) => (
                  <span key={id}>
                    {item.name}
                    {id !== country.languages.length - 1 && ", "}
                  </span>
                ))}
              </p>
              <p>
                <b>Languages: </b>
                {country.languages.map((item, id) => (
                  <span key={id}>
                    {item.name}
                    {id !== country.languages.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </div>
            <div className="country-border-countries">
              {borderCodes.length > 0 && (
                <p>
                  <b>Border Countries:</b>
                </p>
              )}
              <div className="border-countries">
                {borderCodes.length > 0 &&
                  borderCountries.map((item, id) => (
                    <Link
                      key={id}
                      to={`/countries/${item.id}`}
                      className="border-country"
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
