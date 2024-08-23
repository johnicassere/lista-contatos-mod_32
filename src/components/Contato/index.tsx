import { IoMdContact } from "react-icons/io";
import { useDispatch } from "react-redux";
import InputMask from "react-input-mask"
import ContatoClass from '../../models/Contato'
import * as S from "./style"
import { remover, editar } from "../../store/reducers/contatos";
import { useState } from "react";



type Props = ContatoClass

const Contato = ({ id, nomeCompleto: nome, email: e_mail, fone: tel }: Props) => {
    const dispatch = useDispatch()
    const [nomeCompleto, setNomeCompleto] = useState(nome)
    const [email, setEmail] = useState(e_mail)
    const [fone, setFone] = useState(tel)
    const [editarContato, setEditarContato] = useState(false)
    
    const editandoContato = () => {
        dispatch(editar({
            nomeCompleto,
            email,
            fone,
            id
        }))
        setEditarContato(false)
    }
    
    return (
            <S.Card>
                <S.Container>
                    <S.imgContato>
                            <IoMdContact className="icon-card" onClick={() => setEditarContato(true)}/>
                        <span>
                            Editar
                        </span>
                    </S.imgContato>
                    {!editarContato ? (
                       <>
                        <h2>{nomeCompleto}</h2>
                        <h3>{email}</h3>
                        <h3>{fone}</h3>
                        <button onClick={() => dispatch(remover(id))} >Remover</button>
                       </>
                    ):(
                        <>
                        <S.InputEdit
                            id="nomeCompleto"
                            type="text"
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.target.value)}
                         />
                        <S.InputEdit
                        id="email" 
                        type="emil"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                        <InputMask
                        className="input_mask"
                        id="fone" 
                        type="tel"
                        value={fone}
                        onChange={(e) => setFone(e.target.value)}
                        mask="(99) 9 9999 - 9999"
                         />
                        <button className="btn-editar" onClick={editandoContato} >Salvar</button>
                        </>
                    ) 
                }
                    
                </S.Container> 
            </S.Card>
    )
}

export default Contato
