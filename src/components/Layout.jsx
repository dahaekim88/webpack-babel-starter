import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.mode.dark.background};
  color: ${(props) => props.theme.mode.dark.color};
`;

const Layout = ({ children }) => {
  return <Background>{children}</Background>;
};

export default Layout;
