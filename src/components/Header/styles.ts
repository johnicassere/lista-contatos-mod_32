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
border-right: 4px solid ${variaveis.blackColor};
border-radius: 16px;
padding: 24px;
margin-top: 24px;
margin-bottom: 40px;
position: relative;

a{
    color: black;
}

.react-icon{
   font-size: 48px;
   margin: 0 8px;
}

.btn-header{
    position: absolute;
    right: 10px;
    bottom: 0;
}

@media(max-width:768px){
  flex-direction: column;

  .btn-header{
    position: relative;
    
  }

  
.react-icon{
    display: none;
}
}

@media(max-width: 425px){
    text-align: center;
}

`

export const Titulo = styled.h1`
text-shadow: 1px 2px 1px ${variaveis.whiteColor};
margin-right: 12px;
`

