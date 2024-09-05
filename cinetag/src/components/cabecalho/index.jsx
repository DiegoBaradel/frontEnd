
import logo from '../../imagens/Logo-cinetag-branco 1.svg'
import { Link } from "react-router-dom"
import CabecalhoLink from '../cabecalhoLink'
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1em 20em;
    background-color: var(--preto);
`
const Cabecalho = () => {

    return (
        <>
            <StyledHeader>
                <Link to='./'>
                    <img src={logo} alt="Logo do cinetag" />
                </Link>
                <nav>
                    <CabecalhoLink url='./'>Home</CabecalhoLink>
                    <CabecalhoLink url='./favoritos'>Favoritos</CabecalhoLink>
                </nav>
            </StyledHeader>
        </>
    )
}
export default Cabecalho