import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { NoPage } from "./pages/NoPage";
import { HelmetProvider } from "react-helmet-async";
import { CartContextProvider } from "./context/CartContext";


function App() {
  
  
  return (
    <>
      <CartContextProvider>
        <HelmetProvider>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path={"/*"} element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
