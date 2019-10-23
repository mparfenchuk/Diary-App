import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
    font-family: 'Vollkorn', serif;
  }
  body > div {
    height: 100%
  }
  h1, p, hr {
    margin: 0;
  }
  input, button, textarea {
    font-family: 'Vollkorn', serif;
    outline: none;
  }
`

export default GlobalStyle;