import React, { createContext, useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://192.168.1.100:4000"; // Replace with your system IP address

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300+1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [all_product, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/allproducts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setAllProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

      //To save data in the cart if the users logout in will still remains 
      if(localStorage.getItem('auth-token')){
        fetch(`${BASE_URL}/getcart`,{
          method:'POST',
          headers:{
            Accept:'application/json',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json'
          },
          body:JSON.stringify({}) // send empty object instead of empty string
        }).then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data)=>setCartItems(data))
        .catch((error) => {
          console.error("Error fetching cart:", error);
        });
      }
      
  }, []);


  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem('auth-token')){
      fetch(`${BASE_URL}/addtocart`,{
        method:"POST",
        headers:{
          Accept:'application/json',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data)=>console.log(data))
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });


    }
  };


  const removCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem('auth-token')){
      fetch(`${BASE_URL}/removefromcart`,{
        method:"POST",
        headers:{
          Accept:'application/json',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data)=>console.log(data))
      .catch((error) => {
        console.error("Error removing from cart:", error);
      });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += iteminfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItem,
    getTotalCartAmount,
    all_product,
    cartItems,
    addCart,
    removCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
