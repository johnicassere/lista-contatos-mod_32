import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'


type ContatosState = {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            id: 1,
            nomeCompleto:'Conato 1',
            email:'teste@teste.com',
            fone:'00 0 0000 0000'
        },
        {
            id: 2,
            nomeCompleto:'Conato 2',
            email:'teste@teste.com',
            fone:'00 0 0000 0000'
        },
        {
            id: 3,
            nomeCompleto:'Conato 3',
            email:'teste@teste.com',
            fone:'00 0 0000 0000'
        },
        {
            id: 4,
            nomeCompleto:'Conato 4',
            email:'teste@teste.com',
            fone:'00 0 0000 0000'
        },
        {
            id: 4,
            nomeCompleto:'Conato 5',
            email:'teste@teste.com',
            fone:'00 0 0000 0000'
        },
    ]
}

const contatoSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((contato) => contato.id !== action.payload)
            ]
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexConatato = state.itens.findIndex((t) => t.id === action.payload.id)
            if(indexConatato >= 0){
                state.itens[indexConatato] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Contato,'id'>>) => {
            const contatoJaExiste = state.itens.find((contato) => contato.nomeCompleto.toUpperCase() === action.payload.nomeCompleto.toUpperCase())
            if(contatoJaExiste){
                alert(`Já existe um conato com esse nome: ${contatoJaExiste}`)
            }else{
                const ultimoContato = state.itens[state.itens.length -1]
                const contatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }
                state.itens.unshift(contatoNovo)
            }
        },
       
    }
})

export const { remover, cadastrar, editar } = contatoSlice.actions
export default contatoSlice.reducer