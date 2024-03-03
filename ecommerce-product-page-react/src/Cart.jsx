import imageThumbnail from "./assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "./assets/images/icon-delete.svg";

import { useState } from "react";

function Cart(props) {
  function deleteCart() {}
  if (props.open === true) {
    if (props.cart < 1) {
      return (
        <div className="cart--show">
          <h3>Cart</h3>
          <hr />
          <div
            style={{ display: "grid", placeItems: "center", minHeight: "8rem" }}
          >
            <p>Your cart is empty.</p>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="cart--show">
            <h3>Cart</h3>
            <hr />
            <div className="cart__item">
              <img src={imageThumbnail} />
              <div className="cart__info">
                <p>Fall Limited Edition Sneakers</p>
                <div className="cart__price">
                  <p>$125.00 x {props.cart}</p>
                  <p>
                    <b style={{ color: "black" }}>${props.cart * 125}.00</b>
                  </p>
                </div>
              </div>
              <i>
                <img src={iconDelete} />
              </i>
            </div>
            <button>Checkout</button>
          </div>
        </>
      );
    }
  }
}

Cart.defaultProps = {
  open: false,
  empty: true,
};

export default Cart;

// // =====
//       {props.empty === true ? (
// <div className="cart--show">
//   <div
//     style={{ display: "grid", placeItems: "center", minHeight: "8rem" }}
//   >
//     <p>Your cart is empty.</p>
//   </div>
// </div>
//       ) : (
//         <div className="cart--show">
//           <div className="cart__item">
//             <img src={imageThumbnail} />
//             <div className="cart__info">
//               <p>Fall Limited Edition Sneakers</p>
//               <div className="cart__price">
//                 <p>$125.00 x 3</p>
//                 <p>
//                   <b style={{ color: "black" }}>$375.00</b>
//                 </p>
//               </div>
//             </div>
//             <i>
//               <img src={iconDelete} />
//             </i>
//           </div>
//           <button>Checkout</button>
//         </div>
//       )}
//     </>
