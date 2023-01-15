import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import { GlobalStyles } from "./Styles/GlobalStyles";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route index element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    <App />
  </>
);
