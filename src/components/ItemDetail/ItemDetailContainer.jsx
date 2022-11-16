import { useState, useEffect } from "react";
import "./itemdetail.css";
import { getItemDetail } from "../../Services/mockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  async function getItemDetailAsync() {
    //para el manejo de errores con el async await, se utiliza el try/catch
    let response = await getItemDetail(id);
    setProduct(response);
  }

  useEffect(() => {
    getItemDetailAsync();
  }, []);

  return <ItemDetail product={product} />;

  //     <>
  //       <div className="container title">
  //         <h1>Product Detail</h1>
  //       </div>
  //       <div className="container card-detail">
  //         <div className="">
  //           <img
  //             className="card-detail_img"
  //             src={product.imgurl}
  //             alt="Product img"
  //           />
  //           <h3>{product.made}</h3>
  //           <h2>{product.model}</h2>
  //           <p>${product.price}</p>
  //           <p>{product.description}</p>
  //         </div>
  //       </div>
  //     </>
  //   );
}

export default ItemDetailContainer;
