import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

import colors from "./colors";

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }
  
  * {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  body {
    background: ${colors.background};
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: ${colors.textBase};
  }

  ${media.greaterThan("medium")`
    :root {
      font-size: 62.5%;
    }
  `}
`;
