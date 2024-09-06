import styled from 'styled-components'
import iconeFavoritar from '../../imagens/favoritar.svg'
import iconeDesFavoritar from '../../imagens/desfavoritar.svg'
import { useFavotiroContexto } from '../../contextos/favoritoContexto/Favoritos'
import { Link } from 'react-router-dom'

const StyledFavoritar = styled.img`
    width: 25px;
`

const StyledDiv = styled.div`
    padding: 0 0 1em 0;
    margin-top: .5em;
    width: 282px;
    height: 541px;
    background-color: var(--cinza);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2, StyledFavoritar{
        padding: 0 1em;
    }
`

const StyledCapa = styled.img`
    width: 100%;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--preto);
    text-align: left;
`

const Card =({id, titulo, capa})=>{
    const {favorito, adicionarFavorito} = useFavotiroContexto()
    const ehFavorito = favorito.some(item=>item.id === id)
    return(
        <StyledDiv>
            <StyledLink to={`/${id}`}>
                <StyledCapa src={capa} alt={titulo} />
                <h2>{titulo}</h2>
            </StyledLink>
            <StyledFavoritar src={!ehFavorito? iconeFavoritar : iconeDesFavoritar} alt="favoritar filme" onClick={()=>{adicionarFavorito({id, titulo, capa})}}/>
        </StyledDiv>
    )
}

export default Card