import React from "react";
import Item from "./Item";
import "./itemList.css";

function itemList({ products }) {
  return (
    <div className="container products">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            made={product.made}
            model={product.model}
            stock={product.stock}
            price={product.price}
            discount={product.discount}
            category={product.category}
            imgurl={product.imgurl}
          />
        );
      })}
    </div>
  );
}

export default itemList;
