import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #ffffff;
  .container {
    max-width: 980px;
    margin: 0 auto;
    width: 100%;
    padding: 20px;
  }
  a {
    margin-right: 20px;
    font-size: 12px;
    color: #8a8d91;
    display: inline-block;
  }
  .footer_splitter {
    border-bottom: 1px solid #737373;
    opacity: 0.4;
    margin: 10px 0;
  }
  .copy__right__text {
    margin-top: 20px;
  }
`;
export default StyledFooter;
