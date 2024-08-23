import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import InputMask from "react-input-mask"
import { useNavigate } from "react-router-dom"
import { cadastrar } from "../../store/reducers/contatos"
import { ContainerForm } from "./styles"
import { Campo } from "../../styles"




const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')

    const cadastrarContato = (evento: FormEvent) => {
        evento.preventDefault()
        dispatch(cadastrar({
            nomeCompleto,
            email,
            fone,
        }))
        navigate('/')
        
    }

    return(
        <>
        <ContainerForm onSubmit={cadastrarContato}>
             <label htmlFor="nomeCompleto">Nome Completo:</label>
                <Campo 
                onChange={(e) => setNomeCompleto(e.target.value)} 
                type="text" id="nomeCompleto" 
                placeholder="Nome completo" 
                required
                />
                <label htmlFor="email">E-mail:</label>
                <Campo 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" id="email" 
                placeholder="E-mail" 
                required
                />
                <label htmlFor="fone">Telefone:</label>
                <InputMask 
                onChange={(e) => setFone(e.target.value)} 
                type="tel" id="fone" 
                required 
                mask="(99) 9 9999 - 9999"
                />
                <button type="submit">Adicionar</button>
        </ContainerForm>
        
        </>
    )
}

export default Formulario