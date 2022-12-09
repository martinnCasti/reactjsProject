import React from "react";
import MyButton from "../Button/MyButton";
import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
  const urlDetail = `/productDetail/${props.id}`;
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgurl} alt={props.title} />
      </div>
      <div className="">
        <h2>{props.made}</h2>
        <h3>{props.model}</h3>
        <p>{props.category}</p>
        {props.stock <= 0 ? (
          <p>Sin stock disponible</p>
        ) : (
          <p>Disponible: {props.stock}</p>
        )}
        <p>${props.price}</p>
        {props.discount && <p>Discount: {props.discount}</p>}
      </div>

      <Link to={urlDetail}>
        <MyButton color={props.stock <= 0 && "grey"}>More Detail</MyButton>
      </Link>
    </div>
  );
}

export default Item;
