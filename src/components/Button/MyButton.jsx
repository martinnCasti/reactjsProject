import { useState } from "react";
import "./button.css";

function MyButton(props) {
  let [color, setColor] = useState(props.color);
  return (
    <button
      className="btn"
      onClick={props.onClick}
      style={{ backgroundColor: color }}
    >
      {props.children}
    </button>
  );
}

export default MyButton;
