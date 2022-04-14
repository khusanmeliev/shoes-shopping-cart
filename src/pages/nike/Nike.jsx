import React, { useState } from "react";
import "./nike.css";
import { products } from "../../mock/nike";
import Button from "@mui/material/Button";

function Shop() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="shop">
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div className="box">
              <div className="img-part">
                <img src={product.imageUrl} />
              </div>
              <div className="name-part">
                <h3>{product.name}</h3>
              </div>
              <Button variant="contained" onClick={handleClick}>
                Add to cart
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
