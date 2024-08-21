import { IoMdContact } from "react-icons/io";
import * as S from "./style"
import ContatoClass from '../../models/Contato'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


type Props = ContatoClass

const Contato = ({ nomeCompleto, email, fone }: Props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return (
            <S.Card>
                <S.Container>
                    <IoMdContact className="icon-card" onClick={() => navigate('/edicao')}/>
                    <h2>{nomeCompleto}</h2>
                    <h3>{email}</h3>
                    <h3>{fone}</h3>
                </S.Container> 
            </S.Card>
    )
}

export default Contato
