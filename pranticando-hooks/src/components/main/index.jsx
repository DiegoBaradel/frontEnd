import styled from "styled-components"
import Form from "../form/inndex"
import useCadastroContext from "../hook/useCadastroContext"

const StyledMain = styled.main`
    background-color: #4c004c;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`
const StyledForm = styled.form`
    border: 1px solid #000000;
    border-radius: 10px;
    width: 500px;
`

const Main =()=>{
    const {nome, setNome, cargo, setCargo} = useCadastroContext()
    return(
        <StyledMain>
            <StyledForm>
                <Form
                    label='nome'
                    type='text'
                    value = {nome}
                    setValue = {setNome}
                />
                <Form
                    label='cargo'
                    type='text'
                    value = {cargo}
                    setValue = {setCargo}
                />
                <button>subimit</button>
            </StyledForm>
            <section>

            </section>
        </StyledMain>
    )
}

export default Main