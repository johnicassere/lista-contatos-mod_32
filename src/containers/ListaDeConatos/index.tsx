import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import Contato from "../../components/Contato"


const ListaDeContatos = () => {

    const { itens } = useSelector((state: RootReducer) => state.contatos)

    const contatos = itens
   
    return(
        <ul>
            {contatos.map((c) => (
                <li key={c.id}>
                    <Contato 
                    id={c.id}
                    nomeCompleto={c.nomeCompleto}
                    email={c.email}
                    fone={c.fone}
                    />
                    
                </li>
            ))}
        </ul>

    )
}

export default ListaDeContatos