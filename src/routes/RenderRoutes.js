import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../pages/login/Signin";
import Nike from "../pages/nike/Nike";
import All from "../pages/allshoes/All";
import HighBoots from "../pages/highboots/HighBoots";
import Shoes from "../pages/shoes/Shoes";
import NavbarLayout from "./NavbarLayout";
import Cart from "../pages/cart/Cart";

function RenderRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signin" element={<Signin />} />
      <Route element={<NavbarLayout />}>
        <Route path="/allshoes" element={<All />} />
        <Route path="/nike" element={<Nike />} />
        <Route path="/highboots" element={<HighBoots />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default RenderRoutes;
