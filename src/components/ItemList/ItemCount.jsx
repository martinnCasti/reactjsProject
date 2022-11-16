import React, { useState } from "react";
import "../Button/button.css";

function ItemCount(props) {
  let [count, setCount] = useState(1);

  function handleSuma() {
    if (count < props.stock) setCount(count + 1);
  }
  function handleResta() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <button className="btn" onClick={handleResta}>
        -
      </button>
      <span>{count}</span>
      <button className="btn" onClick={handleSuma}>
        +
      </button>
      <button className="btn">Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;
