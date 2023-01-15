import styled from "styled-components";

const StyledLoginForm = styled.form`
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  border-radius: 8px;
  padding: 10px 16px 24px 16px;
  background-color: #ffffff;
  .login__input {
    border: none;
    outline: none;
    width: 100%;
    margin: 6px 0;
    padding: 14px 16px;
    border-radius: 6px;
    border: 1px solid #dddfe2;
    &:focus {
      border-color: #1b74e4;
      box-shadow: 0 0 0 2px #e7f3ff;
      caret-color: #1b74e4;
      &::placeholder {
        opacity: 0.7;
      }
    }
  }

  .input__password {
    position: relative;
    .eye__btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      border: none;
      outline: none;
      background: transparent;
    }
  }

  .login__btn {
    width: 100%;
    margin-top: 12px;
  }
  .login__link {
    text-align: center;
    margin-top: 16px;
    .forgotten__password {
      color: #1877f2;
      font-size: 14px;
      font-weight: normal;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  /* SignUp Link */
  .signup__link {
    border-top: 1px solid #dadde1;
    padding-top: 24px;
    margin-top: 24px;
    text-align: center;
    .create__account {
      border: none;
      border-radius: 6px;
      font-size: 17px !important;
      line-height: 48px !important;
      padding: 14px 16px;
      background-color: #42b72a;
      font-size: 20px;
      line-height: 48px;
      color: #fff;
    }
  }
`;

export default StyledLoginForm;
