import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer, MainNav} from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home, Productos, ItemDetail } from "./pages";



function App() {
  return (
      <>
        <BrowserRouter> 
          <MainNav/>
          <ItemListContainer saludo={`PRODUCTOS DESTACADOS`} />
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/productos" element={ <Productos/> } />
            <Route path="/productos/category/:name" element={ <Productos/> } />
            <Route path="/productos/:id" element={ <ItemDetail/> } />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
