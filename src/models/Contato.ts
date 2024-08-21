class Contato {
    id: number
    nomeCompleto: string
    email: string
    fone: string

    constructor (
        id: number,
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