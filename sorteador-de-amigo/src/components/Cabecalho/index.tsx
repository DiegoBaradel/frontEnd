import CabecalhoStyled from './CabecalhoStyle'

const Cabecalho = () => {
    return (
        <CabecalhoStyled  >
            <div role="img" aria-label='Logo do Sorteador'></div>
            <div>
                <img src="/imagens/participante.png" alt="Participante com um presente na mão" />
            </div>
        </CabecalhoStyled>
    )
}

export default Cabecalho