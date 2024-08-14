import styled from "styled-components"

const ItemListaEstilo = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7B78E5':'#D9D9D9'} ;
    font-family: ${props => props.$ativo ?'GandhiSansBold':'GandhiSansRegular;'};
    display: flex;
    align-items: center;
    gap: 22px ;
`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo=false})=>{
    return(
        <ItemListaEstilo $ativo={ativo}>
            <img src={ativo? iconeAtivo : iconeInativo} alt="icone" />
            {children}
        </ItemListaEstilo>
    )
}

export default ItemNavegacao