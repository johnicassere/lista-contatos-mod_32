import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const Card = styled.div`
background-color: red;
width: 480px;
`

export const FormAdd = styled.form`
display: flex;
flex-direction: column;

label{
    font-weight: bold;
    margin: 8px 0;
    text-align: center;
}

input{
    border: none;
    border-bottom: 1px solid ${variaveis.blackColor};
}

button{
    font-weight: bold;
    margin: 16px 0;
    text-align: center;
    background-color: ${variaveis.blueColor};
    padding: 8px;
    border-radius: 8px;
}

`