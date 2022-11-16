import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
// import MyButton from "./components/Button/MyButton";
// import ItemCount from "./components/ItemList/ItemCount";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
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
          <Route path="/productDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="*" element={<h1>Error 404: Esta pagina no existe</h1>} />
        </Routes>
      </header>
    </BrowserRouter>
  );
}

export default App;
