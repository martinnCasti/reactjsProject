import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    //findIndex devuelve el indice del array en donde se encuentra el elemento
    let intemAlredyInCart = cart.findIndex(
      (itemsInCart) => itemsInCart.id === product.id
    );

    //Utilizamos el metodo spread para meter copiar un array dentro de otro
    let newCart = [...cart];

    if (intemAlredyInCart !== -1) {
      newCart[intemAlredyInCart].count += count;
      setCart(newCart);
    } else {
      //Agregamos el count al objeto producto y lo pusheamos para que tome el count dentro del array
      product.count = count;
      newCart.push(product);
      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemsInCart) => (total = total + itemsInCart.count));
    return total;
  }

  function clearCart() {
    //vaciar el estado
  }

  function removeItem(idRemove) {
    //Utilizar filter cart.filter=> filtrar todos los items con un ID diferente a "idRemove"
  }
  function priceInCart() {
    //calcular el costo total de la compra
  }

  //Agregar todas las funciones que se generen en el context al const value para que no de error de "is not a Function"
  const value = {
    cart,
    addToCart,
    itemsInCart,
    clearCart,
    removeItem,
    priceInCart,
  };

  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}
