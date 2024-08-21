import styled from "styled-components";
import variaveis from "../../styles/variaveis";



export const Button = styled.button`
    font-weight: bold;
    margin: 16px 0;
    text-align: center;
    background-color: ${variaveis.blueColor};
    padding: 8px;
    border: none;
    border-top: 2px solid ${variaveis.blackColor};
    border-left: 3px solid ${variaveis.blackColor};
    border-radius: 8px;
    cursor: pointer;
    
    &:hover{
        border: none;
        border-bottom: 2px solid ${variaveis.blackColor};
        border-right: 3px solid ${variaveis.blackColor};
        text-shadow: 1px 1px 1px ${variaveis.whiteColor};
    }
`

