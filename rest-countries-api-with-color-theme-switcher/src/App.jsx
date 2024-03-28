import "./App.css";
import "./normal.css";
import { useState, useContext } from "react";
import Navbar from "./Components/Navbar";
import CountriesList from "./Components/CountriesList";
import { ThemeContext } from "./Components/ThemeContext";

function App() {
  const { isDark, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <CountriesList />
    </div>
  );
}

export default App;
