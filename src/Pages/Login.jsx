import React from "react";
import { Helmet } from "react-helmet";
import StyledLogin from "./../Styles/StyledLogin";
import faceBookLogo from "./../Images/facebookLogo.svg";
import LoginForm from "../Components/Login/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Facebook – log in or sign up</title>
      </Helmet>

      {/* A React component. */}
      <StyledLogin>
        <div className="contaier">
          <div className="row">
            <div className="login__left">
              <img
                className="login__left__logo"
                src={faceBookLogo}
                alt="Facebook Logo"
              />
              <h2 className="login__left__title">
                Facebook helps you connect and share with the people in your
                life.
              </h2>
            </div>
            <div className="login__right">
              <LoginForm />
              <div className="create__page">
                <Link to="" className="create__page__link">
                  Create a Page
                </Link>
                <span> for a celebrity, brand or business.</span>
              </div>
            </div>
          </div>
        </div>
      </StyledLogin>
    </>
  );
};

export default Login;
