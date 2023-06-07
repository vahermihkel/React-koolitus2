import React, { useState } from 'react'
//import cartFromFile from "../../data/cart.json";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const emptyCart = () => {
    setCart([]);
    // cartFromFile = [];
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const removeFromCart = (index) => {
    cart.splice(index,1); // mitmendat, mitu tk
    setCart(cart.slice()); // slice -> kustutab mälukoha, uuendab carti cart alusel
    // cartFromFile = cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const calculateTotalSum = () => {
    let sum = 0;
    cart.forEach(element => sum = sum + element.price);
    return sum;
  }

  return (
    <div>
      {cart.length > 0 && <button onClick={emptyCart}>Empty cart</button>}
      {cart.length === 0 && <div>Cart is empty!</div>}
      {cart.map((element, index) => 
        <div>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          <button onClick={() => removeFromCart(index)}>X</button>
        </div>)}
      {cart.length > 0 && <div>Total sum: {calculateTotalSum()}</div>}
    </div>
  )
}

export default Cart