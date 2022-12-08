import "./navbar.css";
import IconSVG from "./IconSVG";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartWidget() {
  const myContext = useContext(cartContext);
  console.log(myContext);
  return (
    <div className="containerMenu">
      <IconSVG />
      <span>{myContext.itemsInCart()}</span>
    </div>
  );
}

export default CartWidget;
