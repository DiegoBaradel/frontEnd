import styled from "styled-components"
import Imagem from "../Galeria/Imagem"
import { IoMdClose } from "react-icons/io"

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const Dialog = styled.dialog`
    width: 90%;
    height: 740px ;
    position: absolute;
    top: 294px;
    background-color: transparent;
    margin: auto;
    padding: 0;
    border: none;
`
const ButtonStyled = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 24px;
    border: none;
    right: 24px;
    background: transparent;
    padding: 5px;
    cursor: pointer;
    span{
        color: #ffffff;
    }
`


const ModalZoom = ({ foto, aoFechar}) => {
    return (
        <>
            { foto &&
            <>
                <Overlay />
                <Dialog open={!!foto} >
                    <Imagem foto={foto} expandir={true} />
                    <form method="dialog">
                        <ButtonStyled onClick={aoFechar}><span><IoMdClose size={24} /></span></ButtonStyled>
                    </form>
                
                </Dialog>
            </>}
            
        </>
    )
}

export default ModalZoom
