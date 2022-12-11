import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/firestore";
import MyButton from "../Button/MyButton";
import CartForm from "./CartForm";
import "./cartView.css";

function CartView() {
  const { cart, removeItem, clearCart, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

  // function handleExport() {
  //   exportArrayToFirestore();
  // }

  if (cart.length === 0) return <h1>Carrito Vacio</h1>;

  async function handleCheckout(evt, data) {
    //Crear objeto de orden de compra
    const order = {
      buyer: data,
      items: cart,
      total: priceInCart(),
      date: new Date(),
    };

    const idOrder = await createOrder(order);
    navigate(`/checkout/${idOrder}`);
  }

  return (
    <div className="cart-container">
      <div className="cart-itemsList">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgurl} alt={item.title} />
            <h2>{item.title}</h2>
            <h4>${item.price}</h4>
            <h4>unidades: {item.count}</h4>
            <MyButton onClick={() => removeItem(item.id)} color="red">
              X
            </MyButton>
          </div>
        ))}
      </div>
      <CartForm onSubmit={handleCheckout} />
      <MyButton onClick={() => clearCart()}>Vaciar carrito</MyButton>
    </div>
  );
}

export default CartView;
