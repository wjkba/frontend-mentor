import { useState } from "react";

import "./App.css";
import "./normal.css";
import Navbar from "./Components/Navbar";
import CountriesList from "./Components/CountriesList";

function App() {
  const toggleDarkMode = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  };

  return (
    <div>
      <p>
        - napraw darkmode w country (cos nie tak z body lepiej skorzystaj z
        czegos innego, nie z klasy)
      </p>
      <p> - css country</p>
      <p> - ikonki buttony, darkomde i back</p>
      <p> - custom dropdown</p>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <CountriesList />
    </div>
  );
}

export default App;
