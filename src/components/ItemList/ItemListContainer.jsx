import { useState, useEffect } from "react";
import Item from "./Item";
import "./itemList.css";
import getItems from "../../Services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer(prop) {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  async function getItemsAsync() {
    //para el manejo de errores con el async await, se utiliza el try/catch
    let response = await getItems(id);
    setProducts(response);
  }

  useEffect(() => {
    getItemsAsync();
  }, [id]);

  return (
    <>
      <div className="mainContainer">
        <h1>{prop.greeting}</h1>
      </div>
      <div className="container title">
        <h1>Products</h1>
      </div>
      <div className="container products">
        {products.map((element) => {
          return (
            <Item
              key={element.id}
              id={element.id}
              made={element.made}
              model={element.model}
              stock={element.stock}
              price={element.price}
              category={element.category}
              imgurl={element.imgurl}
            />
          );
        })}
      </div>
    </>
  );
}

export default ItemListContainer;
