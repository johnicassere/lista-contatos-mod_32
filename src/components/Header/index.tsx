import { useNavigate } from 'react-router-dom'
import { IoIosContacts } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import * as S from './styles'
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store';


type Props = {
    title: string
}

const Header = ({title} : Props) => {
    const navigate = useNavigate()
    const { itens } = useSelector((state: RootReducer) => state.contatos)

    return (
        <S.Container>
            <S.Titulo>{title}</S.Titulo>
            {title === 'Lista de Contatos' ? (
               <>
                <IoIosContacts className="react-icon" />
                <span>{itens.length} contatos na agenda</span>
               </>
            ):
            <FaHome className="react-icon-home" onClick={() => navigate('/')}/>
            }
        </S.Container>
    )
}


export default Header