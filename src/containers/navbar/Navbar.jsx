import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";

import Badge from "@mui/material/Badge";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  let { username } = JSON.parse(localStorage.getItem("userData"));
  return (
    <nav>
      <div className="left">
        <h1 style={{ color: "white" }}>Welcome {username}</h1>
      </div>
      <div className="right">
        {(toggleMenu || screenWidth > 800) && (
          <ul className="list">
            <li className="items">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/allshoes"
              >
                All Shoes
              </a>
            </li>
            <li className="items">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/shoes"
              >
                Shoes
              </a>
            </li>
            <li className="items">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/nike"
              >
                Nike
              </a>
            </li>
            <li className="items">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/highboots"
              >
                HighBoots
              </a>
            </li>
            <li className="items">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/signin"
              >
                Log Out
              </a>
            </li>
            <li className="items">
              <a href="/cart" style={{ color: "white" }}>
                <Badge badgeContent={2} color="secondary">
                  <FaShoppingCart />
                </Badge>
              </a>
            </li>
          </ul>
        )}
        <button onClick={toggleNav} className="btn">
          <AiOutlineCaretDown />
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
