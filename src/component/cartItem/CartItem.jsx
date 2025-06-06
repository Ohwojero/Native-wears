import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./CartItem.css";
import { RxCross2 } from "react-icons/rx";
const CartItem = () => {
  const { getTotalCartAmount,all_products, cartItems, removCart } = useContext(ShopContext);
  return (
    <div className="cart-item">
      <div className="cart-item-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-item-format">
                <img src={e.image} alt=""  />

                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-item-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <RxCross2 className="remove-icon"
                  onClick={() => {
                    removCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );

        }
        return null
      })}

      <div className="cartItems-down">
          <div className="cart-total">
              <h1>Cart Totals</h1>
              <div className="sub-total">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="sub-total">
                <p>Hipping fee</p>
                <p>Free</p>
              </div>

              <hr />

              <div className="sub-total">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
          </div>
          
      </div>
      <button className="submit-btn">PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default CartItem;
