import iconMinus from "./assets/images/icon-minus.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconCart from "./assets/images/icon-cart.svg";
import Cart from "./Cart";
import data from "./data.json";
import { useState } from "react";

function ProductInfo(props) {
  let cart = 0;

  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
  }
  function decrement() {
    count === 0 ? setCount(0) : setCount((c) => c - 1);
  }

  const [empty, setEmpty] = useState(true);
  function addToCart() {
    setEmpty(false);
    props.sendDataToParent(count);
  }

  return (
    <div className="product-info">
      <label>SNEAKER COMPANY</label>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="product__price">
        <div className="price-current">
          <p>$125.00</p>
          <div className="discount">50%</div>
        </div>
        <p className="price-old">$250.00</p>
      </div>
      <div className="price-buttons">
        <div className="product__counter">
          <button className="quantity-button" onClick={decrement}>
            <img src={iconMinus} />
          </button>
          <p>{count}</p>
          <button className="quantity-button" onClick={increment}>
            <img src={iconPlus} />
          </button>
        </div>
        <button onClick={addToCart}>
          {" "}
          <img src={iconCart} />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
