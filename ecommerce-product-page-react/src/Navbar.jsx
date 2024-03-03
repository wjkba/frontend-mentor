import { useState } from "react";
import iconMenu from "./assets/images/icon-menu.svg";
import iconClose from "./assets/images/icon-close.svg";
import logo from "./assets/images/logo.svg";
import iconCart from "./assets/images/icon-cart.svg";
import imageAvatar from "./assets/images/image-avatar.png";

import ProductInfo from "./ProductInfo";
import Cart from "./Cart";

function Navbar(props) {
  let cart = props.cart;
  const [cartCount, setCartCount] = useState(cart.length);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen((open) => !open);
  }
  const [isCartOpen, setIsCartOpen] = useState(false);
  function toggleCart() {
    setIsCartOpen((open) => !open);
  }

  return (
    <div className="nav-dekstop-grid">
      <div className="navbar">
        <div className="navbar__left">
          <img onClick={toggleMenu} id="menu-icon" src={iconMenu} />

          <img src={logo} />
          <div className={isMenuOpen ? "menu--overlay" : ""}>
            <ul className={isMenuOpen ? "menu--show" : "menu"}>
              <img onClick={toggleMenu} id="close-icon" src={iconClose} />
              <div className="li-wrapper">
                <li>Collections</li>
              </div>
              <div className="li-wrapper">
                <li>Men</li>
              </div>
              <div className="li-wrapper">
                <li>Women</li>
              </div>
              <div className="li-wrapper">
                <li>About</li>
              </div>
              <div className="li-wrapper">
                <li>Contact</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="navbar__right">
          {isCartOpen ? (
            <Cart open={true} cart={cart} />
          ) : (
            <Cart open={false} cart={cart} />
          )}
          <div className="cart-wrapper" onClick={toggleCart}>
            {cart > 0 && <div className="cart-notif">{cart}</div>}

            <img id="cart-icon" className="icon" src={iconCart} />
          </div>

          <div className="avatar-wrapper">
            <img id="avatar-icon" className="icon" src={imageAvatar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
