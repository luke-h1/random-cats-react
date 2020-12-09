/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import {MainFont} from './Fonts';
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
    font-family: ${MainFont};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
`