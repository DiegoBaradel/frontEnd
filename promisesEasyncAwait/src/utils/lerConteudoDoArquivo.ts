import ResultadoLeitura from "../interface/ResultadoLeitura"

export const lerConteudoDoArquivo = (arquivo:File) =>{
    return new Promise<ResultadoLeitura>((resolve, reject)=>{
        const leitor = new FileReader()
        leitor.onload = ()=>{
            resolve({url: leitor.result, nome: arquivo.name})
        }

        leitor.onerror = ()=>{
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }

        leitor.readAsDataURL(arquivo)
    })
}