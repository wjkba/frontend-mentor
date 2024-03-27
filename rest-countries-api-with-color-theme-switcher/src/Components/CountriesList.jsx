import CountryCard from "./CountryCard";
import data from "../data.json";
import { useState } from "react";
function CountriesList() {
  const [selectedCountries, setSelectedCountries] = useState(data);
  const [countrySearch, setCountrySearch] = useState("");
  const [activeRegion, setActiveRegion] = useState(data);
  let All = data;
  let Africa = data.filter((item) => item.region === "Africa");
  let Americas = data.filter((item) => item.region === "Americas");
  let Asia = data.filter((item) => item.region === "Asia");
  let Europe = data.filter((item) => item.region === "Europe");
  let Oceania = data.filter((item) => item.region === "Oceania");

  const handleCountrySearch = (e) => {
    let search = e.target.value;
    setCountrySearch(search);
    let filtered = activeRegion.filter((item) => {
      const match = new RegExp(search, "gi").test(item.name);
      return match;
    });
    setSelectedCountries(filtered);
  };
  const handleFilterChange = (e) => {
    let filter = e.target.value;
    let filtered = data.filter((item) => {
      if (filter === "All") {
        setActiveRegion(data);
        return true;
      } else if (item.region === filter) {
        return item;
      }
    });
    setCountrySearch("");
    setSelectedCountries(filtered);
    if (filter === "Africa") {
      setActiveRegion(Africa);
    } else if (filter === "Americas") {
      setActiveRegion(Americas);
    } else if (filter === "Asia") {
      setActiveRegion(Asia);
    } else if (filter === "Europe") {
      setActiveRegion(Europe);
    } else if (filter === "Oceania") {
      setActiveRegion(Oceania);
    } else {
      setActiveRegion(All);
    }
  };

  return (
    <>
      <div className="search-filters">
        <div className="search">
          <input
            onChange={handleCountrySearch}
            value={countrySearch}
            placeholder="Search for a country..."
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="filters">
          <select onChange={handleFilterChange}>
            <option hidden disabled>
              Filter by Region
            </option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="countries-list">
        {selectedCountries.map((item, index) => {
          let id = data.findIndex((country) => country.name === item.name);
          return (
            <CountryCard
              key={index}
              id={id}
              flag={item.flag}
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          );
        })}
      </div>
    </>
  );
}
export default CountriesList;
