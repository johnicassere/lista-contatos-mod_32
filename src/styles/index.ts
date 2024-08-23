import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const PaginaGlobal = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    background-color: ${variaveis.grayColor};
    text-decoration: none;
}
`
export const ContainerGlobal = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

export const Campo = styled.input`
    padding: 4px;
    border: none;
    border-radius: 4px;
    border-bottom: 1px solid ${variaveis.blackColor};
    margin-bottom: 12px;
    outline: solid ${variaveis.grayColor}
`

export default PaginaGlobal