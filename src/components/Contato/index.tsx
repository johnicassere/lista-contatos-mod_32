import * as S from "./style"

// github.com/johnicassere/lista-contatos-mod_32
const Contato = () => {
    return (
            <S.Card>
                <S.FormAdd>
                    <label htmlFor=''>Nome Completo:</label>
                    <input type="text" name="nomeCompleto" id='' placeholder="Nome completo"/>

                    <label htmlFor=''>e-mail:</label>
                    <input type="text" name="email" id='' placeholder="e-mail"/>

                    <label htmlFor=''>Telefone:</label>
                    <input type="text" name="fone" id='' placeholder="Telefone"/>
                    <button type="submit">
                        Adicionar
                    </button>

                </S.FormAdd>
            </S.Card>
    )
}

export default Contato