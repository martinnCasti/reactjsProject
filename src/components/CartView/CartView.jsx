import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../Button/MyButton";

function CartView() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);

  if (cart.length === 0) return <h1>Carrito Vacio</h1>;
  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <h2>${item.price}</h2>
          <h2>Unidades: {item.count}</h2>
          <MyButton onClick={() => removeItem(item.id)} color="red">
            X
          </MyButton>
        </div>
      ))}
      <MyButton onClick={() => clear()}>Vaciar Carrito</MyButton>
    </div>
  );
}

export default CartView;
