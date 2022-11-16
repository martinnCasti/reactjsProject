// -------------BACK-END----------------
import products from "../data/data";

function getItems(idCategory) {
  return new Promise((resolve) => {
    if (idCategory === undefined) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      setTimeout(() => {
        let itemRequest = products.filter(
          (item) => item.category === idCategory
        );
        resolve(itemRequest);
      }, 2000);
    }
  });
}

export function getItemDetail(idParam) {
  return new Promise((resolve, reject) => {
    let itemRequest = products.find((item) => item.id === Number(idParam));
    if (itemRequest === undefined) reject("Item no encontrado");
    setTimeout(() => {
      resolve(itemRequest);
    }, 2000);
  });
}
export default getItems;
