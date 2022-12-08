import React, { useState } from "react";
import "../Button/button.css";
import MyButton from "../Button/MyButton";

function ItemCount({ stock, addCart }) {
  let [count, setCount] = useState(1);

  function handleSuma() {
    if (count < stock) setCount(count + 1);
  }
  function handleResta() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <MyButton onClick={handleResta}>-</MyButton>
      <span>{count}</span>
      <MyButton onClick={handleSuma}>+</MyButton>
      <MyButton onClick={() => addCart(count)}>Add to Reserve</MyButton>
    </div>
  );
}

export default ItemCount;
