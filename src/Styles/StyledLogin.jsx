import styled from "styled-components";

const StyledLogin = styled.section`
  background-color: #edf0f5;
  .contaier {
    max-width: 980px;
    padding: 20px;
    margin: 0 auto;
    width: 100%;
    .row {
      padding-bottom: 112px;
      padding-top: 132px;
      display: flex;
      justify-content: space-between;
    }
  }
  .login__left {
    padding-right: 32px;
    &__logo {
      height: 106px;
      margin-left: -28px;
      margin-top: 50px;
    }
    &__title {
      font-size: 26px;
      font-weight: ${({ theme }) => theme.fontWeight.weightMedium};
      line-height: 32px;
      max-width: 500px;
    }
  }
  .login__right {
    width: 396px;
    .create__page {
      font-size: 14px;
      font-weight: normal;
      padding-top: 28px;
      text-align: center;
      &__link {
        font-weight: 700;
        color: #1c1e21;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default StyledLogin;
