import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    outline:0;
    box-sizing: border-box;
   font-family: "Montserrat" sans-serif;
    margin: 0;

    color: #EBD8FF;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;

const Conteiner = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DefaultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export { GlobalStyle, Conteiner, DefaultWrapper };
