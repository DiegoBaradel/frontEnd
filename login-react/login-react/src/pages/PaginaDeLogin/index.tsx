import { useState } from "react"
import Botao from "../../components/Botao"
import Input from "../../components/Input"
import SubTitulo from "../../components/SubTitulo"
import Titulo from "../../components/Titulo"

import style from './PaginaDeLogin.module.css'
import CheckBox from "../../components/CheckBox"
import Texto from "../../components/Texto"
import ItemRedesSociais from "../../components/ItemRedesSociais"
import Link from "../../components/Link"

const PaginaDeLogin = () =>{

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSubmiter =(evento:React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault()
    }

    return(
        <div className={style.container__login}>
            <img src="./img/imagem-login.png" alt="uma mulher negra de cabelo crespo usando um computador, tembem tem o logo do code connect" />
            <form onSubmit={aoSubmiter}>
                <Titulo>Login</Titulo>
                <SubTitulo>Boas-vindas! Faça seu login.</SubTitulo>
                <Input
                    lable="Email ou usuário"
                    id="email"
                    placeholder="Ex: usuario123"
                    type="email"
                    valor={email}
                    setValor = {setEmail}
                />
                <Input
                    lable="Senha"
                    id="senha"
                    placeholder="******"
                    type="current-password"
                    valor={senha}
                    setValor={setSenha}
                />
                <fieldset className={style.form__opcoes}>
                    <CheckBox />
                    <p>
                        <a href="#" aria-label="Recuperar a senha esquecida">Esqueci a senha</a>
                    </p>
                </fieldset>
                <Botao>Login</Botao>
                <div className={style.container__links}>
                    <Texto classe="container__links__titulo">ou entre com outras contas</Texto>
                    <ul>
                        <ItemRedesSociais link="https://www.github.com" nome="Github" />
                        <ItemRedesSociais link="https://www.google.com" nome="Google" />
                    </ul>
                    <Texto classe="container__links__texto">Ainda não tem conta?</Texto>
                    <Link>Crie o seu cadastro!</Link>
                </div>
            </form>
        </div>
    )
}

export default PaginaDeLogin