import React, { useState } from "react";
import CartContext from "./CartContext";

const CartState = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);

  const addProduct = (id) => {
    // Both ways we can add products in the state

    // First Method

    // cartProduct.push(id);
    // setCartProduct(cartProduct);

    // Second Method
    setCartProduct((prev) => [...prev, id]);
  };

  const removeFromCart = (id) =>{


  }

  // console.log(cartProduct)

  return (
    <CartContext.Provider value={{ cartProduct, addProduct, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
