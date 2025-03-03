import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from './reducers/categorias'
import itensSlice from './reducers/itens'
import carrinhoSlice from './reducers/carrinho'

const store = configureStore({
    reducer:{
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store