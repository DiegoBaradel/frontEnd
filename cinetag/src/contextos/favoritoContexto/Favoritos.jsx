import { useContext, useState } from "react";
import { createContext } from "react";

export const FavoritoContexto = createContext()
FavoritoContexto.displayName = 'Favoritos'

const FavoritoProvider = ({children})=>{
    const [favorito, setFavorito] = useState([])
    return(
        <FavoritoContexto.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritoContexto.Provider>
    )
}

export default FavoritoProvider

export const useFavotiroContexto = ()=>{
    const {favorito, setFavorito} = useContext(FavoritoContexto)

    const adicionarFavorito = (novoFavorito)=>{
        const favoritoRepetido = favorito.some(item => item,id === novoFavorito.is)

        let novaLista = [...favorito]

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito)
            return setFavorito(novaLista)
        }

        novaLista = favorito.filter(item=>item.id!==novoFavorito.id)
        return setFavorito(novaLista)
    }
    return{
        favorito,
        adicionarFavorito
    }
}