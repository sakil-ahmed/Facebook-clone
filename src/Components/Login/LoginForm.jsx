import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import StyledLoginForm from "./StyledLoginForm";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
  /* A state hook that is used to toggle the password visibility. */
  const [eye, setEye] = useState(false);

  const passwordToggle = (e) => {
    setEye((prev) => !prev);
    e.preventDefault();
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(user);
  return (
    <StyledLoginForm>
      <input
        className="login__input email"
        type="email"
        name="email"
        placeholder="Email address or phone number"
        onChange={handleChange}
      />
      <div className="input__password">
        <input
          className="login__input password"
          type={eye ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {user.password === "" ? (
          ""
        ) : (
          <button className="eye__btn" onClick={passwordToggle}>
            {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
      </div>
      <Button text="Log in" classname="login__btn" />
      <div className="login__link">
        <Link to="" className="forgotten__password">
          Forgotten password?
        </Link>
      </div>
      <div className="signup__link">
        <Link to="" className="create__account">
          Create New Account
        </Link>
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
