import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const Container = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 4px solid ${variaveis.blackColor};
border-right: 4px solid ${variaveis.blackColor};
border-radius: 16px;
padding: 24px;
margin-top: 24px;
margin-bottom: 40px;
position: relative;

span{
  font-weight: bold;
}
.react-icon{
   font-size: 48px;
   margin: 0 8px;
}

.react-icon-home{
  cursor: pointer;
  font-size: 48px;
  margin: 0 8px;
  color: ${variaveis.whiteColor};

  &:hover{
    color: ${variaveis.blackColor};
  }
}

@media(max-width:768px){
  flex-direction: column;

  
.react-icon{
    display: none;
}
}

@media(max-width: 425px){
    width: 100%;
    text-align: center;
}

`

export const Titulo = styled.h1`
text-shadow: 1px 2px 1px ${variaveis.whiteColor};
margin-right: 12px;
`

