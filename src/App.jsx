import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {

  return (
    <>
    <header>
      <Navbar />
    </header>
    <body>
        <ItemListContainer greeting= "Bienvenidos Perrunos y Felinos Petshop" />
    </body>
      


    </>
  );
}

export default App;
