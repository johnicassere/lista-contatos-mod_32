import { useNavigate } from 'react-router-dom'
import { IoIosContacts } from "react-icons/io";
import * as S from './styles'
import Button from "../Button";
const Header = () => {
    const navigate = useNavigate()
    return (
        <S.Container>
            <S.Titulo>Lista de Contatos</S.Titulo>
            <IoIosContacts className="react-icon" />
            <div className="btn-header">
            <Button title="Adicionar" rota='/adicionar' />
            </div>
        </S.Container>
    )
}


export default Header