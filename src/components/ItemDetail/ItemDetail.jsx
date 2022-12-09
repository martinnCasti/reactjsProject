import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../Button/MyButton";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const { addToCart } = useContext(cartContext);
  const [isInCart, setIsInCart] = useState(false);

  function onAddToCart(count) {
    // alert(`Agregaste Items ${count} al carrito`);
    setIsInCart(count);
    addToCart(product, count);
  }

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.imgurl} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.made}</h2>
        <h3>{product.model}</h3>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
        {product.discount && <p>Discount: {product.discount}</p>}
      </div>
      {isInCart ? (
        <Link to="/cart">
          <MyButton>Ir al carrito</MyButton>
        </Link>
      ) : (
        <ItemCount addCart={onAddToCart} stock={product.stock} />
      )}
    </div>
  );
}

export default ItemDetail;
