import styled from "styled-components";


export const ContainerHome = styled.div`
display: grid;
grid-template-columns: 2fr;

@media(max-width:768px){
    grid-template-columns: 1fr;
}

@media(max-width:426px){
   width: 80%;
   
}
`