import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemList.css";
import getItems from "../../Services/mockService";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer(prop) {
  const [products, setProducts] = useState(null);

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
      {products ? <ItemList products={products} /> : <Loader />}
    </>
  );
}

export default ItemListContainer;
