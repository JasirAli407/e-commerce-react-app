import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

import { Navbar, Product, Products } from "/";
import CreateProduct from "../pages/CreateProduct";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/products/:id" element={<Product />}></Route>

        <Route path="/products" element={<Products />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/addproduct" element={<CreateProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
