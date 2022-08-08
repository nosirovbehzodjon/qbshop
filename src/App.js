import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//Layouts
import Layouts from "./Layouts";
//Pages
import About from "./Pages/About";
import Cart from "./Pages/Cart";
// import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
function App() {
    return (
        <Layouts>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/products/:name" element={<Detail />} />
                <Route path=":name" element={<Detail />} /> */}
            </Routes>
        </Layouts>
    );
}

export default App;
