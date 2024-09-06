import Card from '../card'
import styled from 'styled-components'

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    gap: 24px;
    justify-content: space-around;
    flex-wrap: wrap;
`


const Lista = ({type})=>{
    return(
        <StyledUl>
            {type.map(item=>
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

export default Lista