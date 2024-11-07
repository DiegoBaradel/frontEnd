interface Post{
    id:number
    imagem_capa: string
    titulo: string
    resumo: string
    linhaDeCodigo: number
    compartinhamento: number
    comentario: number
    usuario:{
        imagem: string
        nome: string
    }
}

export default Post