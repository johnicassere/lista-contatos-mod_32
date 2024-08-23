import { IoMdAddCircle } from "react-icons/io";
import ListaDeContatos from "../../containers/ListaDeConatos"
import Header from "../../components/Header"
import { ContainerHome } from "./styles"


const Home = () => {


    return (
     <>
        <Header title="Lista de Contatos"/>
        <ContainerHome>         
          <ListaDeContatos/>               
            <a href="/adicionar">
              <IoMdAddCircle className="btn-home" />
           </a>
        
        </ContainerHome>
     </>
    )
}

export default Home