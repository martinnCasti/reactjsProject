import React from "react";
import { useParams } from "react-router-dom";

function Checkout() {
  const idOrder = useParams().idOrder;
  return (
    <div>
      <h1>Gracias por tu compra!</h1>
      <h2>El id de tu compra es: {idOrder} </h2>
    </div>
  );
}

export default Checkout;
