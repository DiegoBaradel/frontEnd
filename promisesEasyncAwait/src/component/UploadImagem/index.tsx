import { useRef, useState } from 'react'
import './UploadImagem.css'
import { lerConteudoDoArquivo } from '../../utils/lerConteudoDoArquivo'
import { publicarProjeto } from '../../utils/publicarProjeto'
import IProjeto from '../../interface/IProjeto'
import listaDeTagsValida from '../../../db.json'


const UploadImagem = () => {

    const inputUpload = useRef<HTMLInputElement>(null)

    const [carregarImagem, setCarregarImagem] = useState<string>('./img/imagem1.png')
    const [nomeImagem, setNomeImagem] = useState<string>('image_projeto.png')
    const [listaTags, setListaTags] = useState<string[]>([])

    const [tag, setTag] = useState<string>('')
    const [nomeProjeto, setNomeProjeto] = useState<string>('')
    const [descricaoProjeto, setDescricaoProjeto] = useState<string>('')

    
    const lisparFormulario = () => {
        setCarregarImagem('./img/imagem1.png')
        setNomeImagem('image_projeto.png')
        setListaTags([])
        setTag('')
        setNomeProjeto('')
        setDescricaoProjeto('')
    }
    const upload = () => {
        inputUpload.current?.click()
    }
    const aoSalvarFormulario = async (evt: React.FormEvent<HTMLFormElement>, projeto:IProjeto) => {
        evt.preventDefault()
        await publicarProjeto(projeto)
        lisparFormulario()
        
    }
    

    const aoClicarEnter = async (evt: React.KeyboardEvent<HTMLInputElement>) => {
        
        if (evt.key === "Enter" && tag.trim() !== '') {
            evt.preventDefault()
            try {

                const validarTag = verificarTagDisponiveis(tag.toLowerCase())
                if (await validarTag && !listaTags.includes(tag)) {
                    setListaTags([...listaTags, tag])
                } else {
                    alert(`tag ${tag} não encontrada, ou já existe !!!`)
                }
            } catch (error) {
                console.error('Erro ao verificar a existencia da tag')
            }
        }

    }
    const excluirTag = (key: string) => {
        setListaTags(listaTags.filter(tag => tag !== key))
    }

    const aoCarregar = async (evento: React.ChangeEvent<HTMLInputElement>) => {
        const arquivo = evento.target.files
        if (arquivo) {
            try {
                const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo[0])
                setNomeImagem(conteudoDoArquivo.nome)
                if (conteudoDoArquivo.url?.toString()) {
                    setCarregarImagem(conteudoDoArquivo.url?.toString())
                }
            }
            catch (erro) {
                console.error("Erro de leitura do arquivo")
            }
        }
    }

    const verificarTagDisponiveis = async (texto: string) => {
        return new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(listaDeTagsValida.tags.includes(texto))
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
                <form onReset={lisparFormulario} onSubmit={(evt)=>aoSalvarFormulario(evt,{nome: nomeProjeto, decricao: descricaoProjeto, tags: listaTags})}>
                    <div>
                        <label htmlFor="nome">Nome do Projeto</label>
                        <input onChange={evt =>setNomeProjeto(evt.target.value)} value={nomeProjeto} type="text" name="nome" id="nome" required />
                    </div>
                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea required onClick={evt=>evt.preventDefault()} onChange={evt => setDescricaoProjeto(evt.target.value)} value={descricaoProjeto} name="descricao" id="descricao" />
                    </div>
                    <div>
                        <label htmlFor="categoria">Tags</label>
                        <input onChange={evt => setTag(evt.target.value)} value={tag} onKeyDown={aoClicarEnter} type="text" name="categoria" id="categoria" required />
                    </div>
                    <ul className="lista-tags">
                        {
                            listaTags.map((tag) =>
                                <li key={tag}>
                                    <p>{tag}</p>
                                    <img onClick={() => excluirTag(tag)} src="./img/close-black.svg" />
                                </li>)
                        }

                    </ul>
                    <div className="container-botoes">
                        <button type='reset' className="botao-descartar">Descartar</button>
                        <button type='submit' className="botao-publicar">Publicar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default UploadImagem