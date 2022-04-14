import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../containers/navbar/Navbar";

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default NavbarLayout;
