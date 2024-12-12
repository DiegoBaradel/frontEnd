import IProjeto from "../interface/IProjeto";

const listaProjetos:IProjeto[] = []

export const publicarProjeto = (projeto: IProjeto)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5
            if (deuCerto) {
                resolve('Projeto publicado com sucesso.')
                alert('deu bom')
                listaProjetos.push(projeto)
            } else {
                reject('Erro ao publicar o projeto.')
                alert('deu ruin')
            }
            console.log(listaProjetos)
        }, 2000);
    })
}