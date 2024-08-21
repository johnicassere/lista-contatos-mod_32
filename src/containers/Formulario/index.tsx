import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { cadastrar } from "../../store/reducers/contatos"

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
        <></>
    )
}

export default Formulario