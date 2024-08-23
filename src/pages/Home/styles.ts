import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const ContainerHome = styled.div`
align-items: center;
position: relative;

a{
    color: ${variaveis.greenColor};
    background-color: transparent;
}

.btn-home{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    position: fixed;
    right: 20px;
    bottom: 50px;

    &:hover{
        opacity: 0.7;
        width: 62px;
        height: 62px;
    }
}


@media(max-width:450px){
    width: 318px;
    display: flex;
    justify-content: center;

    .btn-home{
        width: 40px;
        height: 40px;
    }
}

`