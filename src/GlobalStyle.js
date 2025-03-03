import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  }

*, ::after, ::before {
  box-sizing: inherit;
  }

body {
  font-family: "Montserrat", sans-serif;
  background-color: #EEEEEE;
  /* padding: 5px; */
  }
`;

export const MainContainer = styled.main`
  max-width: 900px;
  min-width: 200px;
  padding: 20px 10px;
  margin: 10px auto;
`;