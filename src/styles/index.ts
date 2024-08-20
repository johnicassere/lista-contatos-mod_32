import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

export const PaginaGlobal = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    background-color: ${variaveis.grayColor};
    text-decoration: none;

    #root{
        display: flex;
        justify-content: center;

    }
}
`
export const ContainerGlobal = styled.div`
width: 1024px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
