import { IoIosContacts } from "react-icons/io";
import * as S from './styles'
const Header = () => {
    return (
        <S.Container>
            <S.Titulo>Lista de Contatos</S.Titulo>
            <a href="/"><IoIosContacts className="react-icon" /></a>
        </S.Container>
    )
}


export default Header