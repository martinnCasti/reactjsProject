import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Welcome to RealCars, your next car is waiting for you" />
              }
            />
            <Route
              path="/productDetail/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartView />} />

            <Route path="/checkout/:idOrder" element={<Checkout />} />
            <Route
              path="*"
              element={<h1>Error 404: Esta pagina no existe</h1>}
            />
          </Routes>
        </header>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
