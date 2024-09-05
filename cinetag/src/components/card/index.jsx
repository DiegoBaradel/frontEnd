import styled from 'styled-components'
import iconeFavoritar from '../../imagens/favoritar.svg'

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

const Card =({id, titulo, capa})=>{
    return(
        <StyledDiv>
            <StyledCapa src={capa} alt={titulo} />
            <h2>{titulo}</h2>
            <StyledFavoritar src={iconeFavoritar} alt="favoritar filme" />
        </StyledDiv>
    )
}

export default Card