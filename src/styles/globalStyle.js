import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 300px",
  moPadding: "0 20px",
  maincolor: "#071E61",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
      
        letter-spacing: -1px;
        word-break: keep-all;
    }

    a{
        text-decoration: none;
    }
`;
