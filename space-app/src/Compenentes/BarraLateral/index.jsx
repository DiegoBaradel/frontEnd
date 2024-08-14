import styled from "styled-components"
import ItemNavegacao from "../ItemNavegacao"

const ListaEstilo = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 212px;
`
const BarraLateral = ()=>{
    return(
        <aside>
            <nav>
                <ListaEstilo>
                    <ItemNavegacao
                        iconeAtivo='./icones/home-ativo.png'
                        iconeInativo='./icones/home-inativo.png'
                        ativo
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo='./icones/mais-vistas-ativo.png'
                        iconeInativo='./icones/mais-vistas-inativo.png'
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo='./icones/mais-curtidas-ativo.png'
                        iconeInativo='./icones/mais-curtidas-inativo.png'
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo='./icones/novas-ativo.png'
                        iconeInativo='./icones/novas-inativo.png'
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo='./icones/surpreenda-me-ativo.png'
                        iconeInativo='./icones/surpreenda-me-inativo.png'
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilo>
            </nav>
        </aside>
    )
}

export default BarraLateral