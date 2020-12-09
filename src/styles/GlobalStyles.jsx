/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body { 
    font-size: 16px;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Roboto, 'sans-serif'"
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
`