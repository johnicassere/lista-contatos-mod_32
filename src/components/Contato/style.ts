import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const Card = styled.div`
width: 980px;
border-radius: 16px;
border-bottom: solid 4px ${variaveis.blackColor};
border-right: solid 4px ${variaveis.blackColor};
padding: 20px;
margin: 24px 8px;


&:hover{
border: none;
border-top: solid 2px ${variaveis.blackColor};
border-left: solid 2px ${variaveis.blackColor};
}

@media(max-width:768px){
    width: 560px;
}

@media(max-width:430px){
    width: 360px;
}

`

export const imgContato = styled.div`
display: flex;
flex-direction: row;
span{
    display: block;
    font-size: 14px;
    margin-top: 8px;
   

}


.icon-card{
    font-size: 38px;
    cursor: pointer;
    &:hover{
        font-size: 42px;
    }
}


&:hover {
   opacity: 0.7;
}

`

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h2{
    font-weight: bold;
    margin: 8px 0;
    text-align: center;
    text-shadow: 1px 1px 1px ${variaveis.whiteColor};
}

h3{
    font-weight: 400;
    margin: 8px;
}

button{
    width: 250px;
    padding: 8px;
    border-radius: 8px;
    font-weight: bold;
    background-color: ${variaveis.redColor};
    border: none;
    border-top: 2px solid ${variaveis.blackColor};
    border-left: 2px solid ${variaveis.blackColor};

    &:hover{
        text-shadow: 1px 1px 1px ${variaveis.whiteColor};
    }
}

.btn-editar{
    width: 250px;
    padding: 8px;
    border-radius: 8px;
    font-weight: bold;
    background-color: ${variaveis.blueColor};
    border: none;
    border-top: 2px solid ${variaveis.blackColor};
    border-left: 2px solid ${variaveis.blackColor};

    &:hover{
        text-shadow: 1px 1px 1px ${variaveis.whiteColor};
    }
}

.input_mask{
    width: 150px;
    text-align: center;
    padding: 4px;
    border: none;
    border-radius: 4px;
    border-bottom: 1px solid ${variaveis.blackColor};
    margin-bottom: 12px;
    outline: solid ${variaveis.grayColor};

    }
`

export const InputEdit = styled.input`
    padding: 4px;
    width: 200px;
    text-align: center;
    border: none;
    border-radius: 4px;
    border-bottom: 1px solid ${variaveis.blackColor};
    margin-bottom: 12px;
    outline: solid ${variaveis.grayColor};
    
    
`