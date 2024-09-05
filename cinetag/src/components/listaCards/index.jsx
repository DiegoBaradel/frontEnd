import Card from '../card'
import Cards from '../../json/db.json'
import styled from 'styled-components'

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    gap: 24px;
    justify-content: space-around;
    flex-wrap: wrap;
`


const ListaCard = ()=>{
    return(
        <StyledUl>
            {Cards.map(item=>
                <li key={item.id}>
                    <Card 
                        id={item.id}
                        titulo={item.titulo}
                        capa={item.capa}
                    />
                </li>
            )}
        </StyledUl>
    )
}

export default ListaCard