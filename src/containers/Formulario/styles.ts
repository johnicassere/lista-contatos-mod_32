import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const ContainerForm = styled.form`
width: 360px;
display: flex;
flex-direction: column;
text-align: center;
font-weight: bold;

label{
    padding: 8px;
}

input{
    padding: 4px;
    border: none;
    border-radius: 4px;
    border-bottom: 1px solid ${variaveis.blackColor};
    margin-bottom: 12px;
    outline: solid ${variaveis.grayColor}
}

button{
    padding: 8px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${variaveis.greenColor};

    &:hover{
        text-shadow: 1px 1px 1px ${variaveis.whiteColor};
    }
}

@media(max-width:450px){
    width: 280px;
}
`