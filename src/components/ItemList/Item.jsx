import React from "react";
import MyButton from "../Button/MyButton";
import ItemCount from "./ItemCount";
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
        <p>${props.stock}</p>
        <p>${props.price}</p>
      </div>

      <Link to={urlDetail}>
        <MyButton text="More Detail" color="blue" />
      </Link>
      <div>
        <ItemCount />
      </div>
    </div>
  );
}

export default Item;
