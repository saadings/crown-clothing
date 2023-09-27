import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  // font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  //   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  //   sans-serif;
  font-family: 'Open Sans';
  padding: 20px 40px;
  
  // anything bellow 800px
  @media screen and (max-width: 800px) {
    padding: 10px;
  }

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: black
}

* {
  box-sizing: border-box;
}
`;
