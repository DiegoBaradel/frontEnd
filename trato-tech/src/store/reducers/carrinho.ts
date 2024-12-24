import { createSlice } from "@reduxjs/toolkit";
import Iitem from "../../Interfaces/IItens";

const initialState:Iitem[] = []

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers:{
        mudarCarrinho:( state , {payload} ) =>{
            const temItem = state.some(item=> item.id === payload.id)
            if (!temItem) {
                const novoItem = payload
                console.log(novoItem)
                return [...state, novoItem]
            }
            const novaLista = state.filter(item=> item.id !== payload.id)
            return [...novaLista]
        }
    }
})

export default carrinhoSlice.reducer
export const { mudarCarrinho } = carrinhoSlice.actions