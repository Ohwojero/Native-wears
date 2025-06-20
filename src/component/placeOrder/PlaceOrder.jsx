import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import "./placeOrder.css";
import { ShopContext } from "../../context/ShopContext";
const PlaceOrder = () => {
    const navigate = useNavigate()
    const {getTotalCartAmount} = useContext(ShopContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="email" placeholder="Enter your Email" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <input type="tel" placeholder="Your Phone Line" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h1>Cart Totals</h1>
          <div className="sub-total">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="sub-total">
          <p>Deleivery Fee</p>
          <p>${getTotalCartAmount()===0?0:2}</p>
          </div>

          <hr />

          <div className="sub-total">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
        <button className="submit-btn" onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
