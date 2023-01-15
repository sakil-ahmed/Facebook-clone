import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.div`
  display: inline-block;
  .btn {
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 0 16px;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
  }
  .primary {
    background-color: ${({ theme }) => theme.colors.blueColor};
    font-size: 20px;
    line-height: 48px;
    color: ${({ theme }) => theme.colors.bgPrimary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.btnPrimaryHover};
    }
  }
  .secondary {
  }
`;

const Button = ({ varient = "primary", path = "", classname, text }) => {
  return (
    <StyledButton className={classname}>
      {path ? (
        <Link className={`btn ${varient}`} to={path}>
          {text}
        </Link>
      ) : (
        <button className={`btn ${varient}`}>{text}</button>
      )}
    </StyledButton>
  );
};

export default Button;
