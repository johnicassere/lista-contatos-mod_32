class Contato {
    id: string
    nomeCompleto: string
    email: string
    fone: string

    constructor (
        id: string,
        nomeCompleto: string,
        email: string,
        fone: string
    ){
        this.id = id
        this.nomeCompleto = nomeCompleto
        this.email = email
        this.fone = fone
    }
}

export default Contato