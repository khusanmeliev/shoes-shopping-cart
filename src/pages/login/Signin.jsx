import React, { useState } from "react";
import "./signin.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const initialValues = { username: "", password: "" };

  const [values, setValues] = useState(initialValues);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
    localStorage.setItem("userData", JSON.stringify(values));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    navigate("/allshoes");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="login">
          <div className="title">
            <h1>Welcome</h1>
          </div>
          <div className="input">
            <input
              type="name"
              name="username"
              id="username"
              placeholder="Name "
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <Button
            type="submit"
            variant="outlined"
            style={{
              width: 150,
              margin: 20,
              color: "white",
            }}
          >
            Submit
          </Button>
          <p id="error"></p>
        </div>
      </form>
    </div>
  );
}

export default Signin;
