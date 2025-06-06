import React, { useContext, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const [isNavShowing, setIsNavShowing] = useState(false);
  const { getTotalCartItem} = useContext(ShopContext)
  return (
    <div>
      <div className="navbar">
        {/* image */}
        <p>Native Wears</p>

        <ul className={`nav-menu ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
          <li onClick={() => { setmenu("shop")}}><Link to='/' style={{textDecoration:'none'}}  onClick={() => setIsNavShowing(prev => !prev)}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={() => {setmenu("men")}}> <Link to='men' style={{textDecoration:'none'}}  onClick={() => setIsNavShowing(prev => !prev)}>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
          <li onClick={() => {setmenu("women")}} > <Link to='women' style={{textDecoration:'none'}}  onClick={() => setIsNavShowing(prev => !prev)}>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
          <li onClick={() => {setmenu("bags")}}> <Link to='bags' style={{textDecoration:'none'}}  onClick={() => setIsNavShowing(prev => !prev)}>Bags</Link>{menu === "bags" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
         <Link to='login' style={{textDecoration:'none'}}><button className="nav-btn">Login</button></Link> 
         <Link to='cart' style={{textDecoration:'none'}}>  <BsCart3 className="cart-icon" /></Link> 
          <div className="nav-cart-count">{ getTotalCartItem()}</div>
        </div>
        <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                
                {isNavShowing ? <IoMdClose className='menu' /> : <CiMenuBurger className='menu' />}
            </button>
      </div>
    </div>
  );
};

export default Navbar;
