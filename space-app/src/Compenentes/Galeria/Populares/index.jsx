import styled from "styled-components"
import Titulo from "../../Titulo"
import fotos from './fotos-populares.json'

const StyledSection = styled.section`

`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    div{
        overflow: hidden;
        max-width: 212px;
        height: 158px;
        border-radius: 10px;
        img{
            height: 100%;
        }
    }
`
const StyledButton = styled.button`
    width: 100%;
    margin-top: 24px;
    width: 208px;
    height: 56px;
    border: 2px solid #c98cf1;
    border-radius: 10px;
    background-color: transparent;
    cursor: pointer;
    span{
        color: #ffffff;
        font-family: 'GandhiSansBold';
        font-size: 20px;
        line-height: 24px;
        text-align: center;
    }
`

const Populares = () => {
    return (
        <StyledSection>
            <Titulo $alinhamento = 'center'>Populares</Titulo>
            <StyledDiv>
                {fotos.map(foto=><div key={foto.id}><img src={foto.path}/></div>)}
            </StyledDiv>
            <StyledButton><span>Ver mais</span></StyledButton>
        </StyledSection>
    )
}

export default Populares