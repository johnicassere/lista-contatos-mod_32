import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const Card = styled.div`
width: 490px;
border-radius: 16px;
border-bottom: solid 4px ${variaveis.blackColor};
border-right: solid 4px ${variaveis.blackColor};
padding: 20px;
margin: 16px;


&:hover{
border: none;
border-top: solid 2px ${variaveis.blackColor};
border-left: solid 2px ${variaveis.blackColor};
}

.icon-card{
    font-size: 38px;
    cursor: pointer;
}

`

export const Container = styled.div`
display: flex;
flex-direction: column;

h2{
    font-weight: bold;
    margin: 8px 0;
    text-align: center;
    text-shadow: 1px 1px 1px ${variaveis.whiteColor};
}



`