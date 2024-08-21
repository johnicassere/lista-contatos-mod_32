import ListaDeContatos from "../../containers/ListaDeConatos"
import Header from "../../components/Header"
import { ContainerHome } from "./styles"


const Home = () => {
    return (
     <>
        <Header/>
        <ContainerHome>
            <ListaDeContatos/>
        </ContainerHome>
     </>
    )
}

export default Home