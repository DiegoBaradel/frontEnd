import { useRef, useState } from 'react'
import './UploadImagem.css'
import { lerConteudoDoArquivo } from '../../utils/lerConteudoDoArquivo'

const UploadImagem = () => {

    const listaDeTagsValida = ['front-end', 'programaçao', 'data science', 'html', 'css', 'javascript', 'react',]

    const inputUpload = useRef<HTMLInputElement>(null)

    const [carregarImagem, setCarregarImagem] = useState<string>('./img/imagem1.png')
    const [nomeImagem, setNomeImagem] = useState<string>('image_projeto.png')
    const [listaTags, setListaTags] = useState<string[]>([])
    const [tag, setTag] = useState<string>('')

    const upload = () =>{
        inputUpload.current?.click()
    }
    const aoSalvarFormulario = (evt: React.FormEvent<HTMLFormElement>)=>{
        evt.preventDefault()
    }
    const aoClicarEnter = async (evt:React.KeyboardEvent<HTMLInputElement>)=>{
        if (evt.key === "Enter" && tag.trim() !== '') {
            try {
                
                const validarTag =  verificarTagDisponiveis(tag.toLowerCase())
                if (await validarTag) {
                    setListaTags([...listaTags, tag])
                }else{
                    alert(`tag ${tag} não encontrada !!!`)
                }

            } catch (error) {
              console.error('Erro ao verificar a existencia da tag')  
            }
        }
        setTag('')
    }
    const excluirTag = (key: string)=>{
        setListaTags(listaTags.filter(tag=> tag !== key))
    }

    const aoCarregar = async (evento: React.ChangeEvent<HTMLInputElement>) =>{
        const arquivo = evento.target.files
        if (arquivo) {
            try {
                const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo[0])
                setNomeImagem(conteudoDoArquivo.nome)
                if (conteudoDoArquivo.url?.toString()) {
                    setCarregarImagem(conteudoDoArquivo.url?.toString())
                }
            }
            catch(erro){
                console.error("Erro de leitura do arquivo")
            }
        }
    }

    const verificarTagDisponiveis = async (texto: string) =>{
        return new Promise<boolean>((resolve)=>{
            setTimeout(() => {
                resolve(listaDeTagsValida.includes(texto))
            }, 1000);
        })
    } 

    return (
        <main>
            <div className="container-upload-imagem">
                <div className="container-imagem">
                    <img className="main-imagem" src={carregarImagem} alt="" />
                </div>
                <button onClick={upload} id='upload-btn'>Carregar imagem</button>
                <input onChange={aoCarregar} ref={inputUpload} type="file" id='image-upload' accept='image/' />
                <div className="container-imagem-nome">
                    <p>{nomeImagem}</p>
                    <img src="./img/close.svg" />
                </div>
            </div>
            <div className="container-descricao">
                <h2>Novo projeto</h2>
                <form onSubmit={aoSalvarFormulario}>
                    <div>
                        <label htmlFor="nome">Nome do Projeto</label>
                        <input type="text" name="nome" id="nome"/>
                    </div>
                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea name="descricao" id="descricao" />
                    </div>
                    <div>
                        <label htmlFor="categoria">Tags</label>
                        <input onKeyDown={aoClicarEnter} onChange={(evt)=>setTag(evt.target.value)} value={tag} type="text" name="categoria" id="categoria" />
                    </div>
                    <ul className="lista-tags">
                        {
                            listaTags.map((tag)=>
                            <li key={tag}>
                                <p>{tag}</p>
                                <img onClick={()=>excluirTag(tag)} src="./img/close-black.svg" />
                            </li>)
                        }
                        
                    </ul>
                    <div className="container-botoes">
                        <button className="botao-descartar">Descartar</button>
                        <button className="botao-publicar">Publicar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default UploadImagem