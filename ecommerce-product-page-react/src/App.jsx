import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

function App() {
  const [cart, setCart] = useState(0);
  const handleCart = (data) => {
    setCart((d) => d + data);
  };
  return (
    <>
      <Navbar cart={cart} />
      <div style={{ display: "grid", placeItems: "center", minHeight: "80vh" }}>
        <div className="home">
          <ProductImage />
          <ProductInfo sendDataToParent={handleCart} />
        </div>
      </div>
    </>
  );
}

export default App;
