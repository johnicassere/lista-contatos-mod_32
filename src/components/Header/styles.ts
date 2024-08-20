import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const Container = styled.div`
max-width: 1024px;
width: 100%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 4px solid ${variaveis.blackColor};
padding: 24px;
margin-top: 24px;
margin-bottom: 40px;

a{
    color: black;
}

.react-icon{
   font-size: 48px;
}
`

export const Titulo = styled.h1`
text-shadow: 1px 2px 1px ${variaveis.whiteColor};
margin-right: 12px;
`

