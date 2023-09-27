import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
*{
    margin:0;
    box-sizing:border-box;
} 

.header{
  height: 100px;
  text-align: center;
}

.logo{
  height: 100%;
  width: 25%;
}
`;
