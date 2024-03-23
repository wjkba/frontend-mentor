import { useState } from "react";

import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import Download from "./Components/Download";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="lg:max-w-5xl max-w-sm w-full  flex flex-col gap-20">
          <Home />
          <Features />
          <Download />
          <FAQ />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
