import styled from 'styled-components'
import tags from './tags.json'

const Conteiner = styled.div`
    align-items: center;
    max-width: 758px;
    height: 49px;
    margin-top: 56px;
    display: flex;
    gap: 24px;
`

const BotaoEstilo = styled.button`
    flex-grow: 1;
    background: rgba(217, 217, 217, 0.3);
    box-sizing: border-box;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 10px 8px;
    &:hover{
        border-color: #C98CF1 ;
    }
`
const Texto = styled.p`
    color: #ffffff;
    margin: 0;
    font-weight: 400px;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
`
const Tags = () =>{
    return(
        <Conteiner>
        <Texto>Busque por tags:</Texto>
        {tags.map(tag=> <BotaoEstilo key={tag.id}><Texto>{tag.titulo}</Texto></BotaoEstilo>)}
        </Conteiner>
    )
}

export default Tags