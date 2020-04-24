import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * { 
    box-sizing: border-box;
    margin:0;
    padding: 0; 
  }
`;

const theme = {
  mode: {
    dark: {
      background: "#30404d",
      color: "#f5f8fa",
    },
    light: {
      background: "#f5f8fa",
      color: "#182026",
    },
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
