import { useState, useEffect } from "react";
import "./itemdetail.css";
import { getItemDetail } from "../../Services/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  async function getItemDetailAsync() {
    //para el manejo de errores con el async await, se utiliza el try/catch
    getItemDetail(id).then((response) => {
      setProduct(response);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getItemDetailAsync();
  }, []);

  if (isLoading) return <h3>Loading...</h3>;

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
