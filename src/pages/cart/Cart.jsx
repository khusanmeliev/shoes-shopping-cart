import React, { useState } from "react";
import "./cart.css";
import { carts } from "../../mock/cart";

function Cart() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="cart">
      <ul>
        {carts.map(cart => (
          <li key={cart.id}>
            <div className="box">
              <div className="right">
                <div className="img-part">
                  <img src={cart.imageUrl} />
                </div>
              </div>
              <div className="left">
                <div className="top">
                  <div className="title">
                    <h1 style={{ color: "black" }}>{cart.name}</h1>
                  </div>
                </div>
                <div className="middle">
                  <div className="text">
                    <h1 style={{ color: "black" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod
                    </h1>
                  </div>
                </div>
                <div className="bottom">
                  <div className="add">
                    <button onClick={decrement} disabled={count === 0}>
                      -
                    </button>
                    <p>{count}</p>
                    <button onClick={increment}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
