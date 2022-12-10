import "./navbar.css";
import IconSVG from "./IconSVG";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const myContext = useContext(cartContext);

  return (
    <div className="containerMenu">
      <Link to="/cart">
        <IconSVG />
      </Link>
      <span>{myContext.itemsInCart()}</span>
    </div>
  );
}

export default CartWidget;
