import chat from './assets/chat.svg'
import code from './assets/code.svg'
import share from './assets/share.svg'

import './styles.css'
import Post from '../../Interface/Post'

const Card = ({imagem_capa, comentario, compartinhamento, linhaDeCodigo, resumo, titulo, usuario}:Post) =>{
    return(
        <article className="card">
            <div className="card-imagem">
                <img src={imagem_capa} alt="imagem do post" />
            </div>
            <div className='card-conteudo'>
                <div className='conteudo-texto'>
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>

                <div className='conteudo-rodape'>
                    <ul>
                        <li>
                            <img src={code} alt="codigos" />
                            {linhaDeCodigo}
                        </li>
                        <li>
                            <img src={share} alt="compartinhamentos" />
                            {compartinhamento}
                        </li>
                        <li>
                            <img src={chat} alt="comentarios" />
                            {comentario}
                        </li>
                    </ul>

                    <div className='rodape-usuario'>
                        <img src={usuario.imagem} alt="icone do usuario" />
                        {usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card