import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/firestore";
import MyButton from "../Button/MyButton";

function CartView() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

  // function handleExport() {
  //   exportArrayToFirestore();
  // }

  if (cart.length === 0) return <h1>Carrito Vacio</h1>;

  async function handleCheckout(event) {
    //Crear objeto de orden de compra
    const order = {
      buyer: {
        name: "Martin",
        email: "martin@gmail.com",
        phone: "1234567",
      },
      items: cart,
      total: priceInCart(),
      date: new Date(),
    };

    const idOrder = await createOrder(order);
    navigate(`/checkout/${idOrder}`);
  }

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
      <MyButton onClick={handleCheckout}>Finalizar compra</MyButton>

      <MyButton onClick={() => clear()}>Vaciar Carrito</MyButton>
    </div>
  );
}

export default CartView;
