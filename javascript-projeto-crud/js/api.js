const URL_BASE = 'http://localhost:3000'

const api = {
    async buscarPensamentos(){
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos`)
            return await response.data
        } catch (error) {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

    async salvarPensamento(pentamento){
        try {
            const response = await axios.post(`${URL_BASE}/pensamentos`, pentamento)
            return await response.data
        } catch (error) {
            alert('Erro ao salvar pensamento')
            throw error
        }
    },

    async buscarPensamentoPorId(id){
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
            return await response.data
        } catch (error) {
            alert('Erro ao buscar pensamento')
            throw error
        }
    },

    async editarPensamento(pentamento){
        try {
            const response = await axios.put(`${URL_BASE}/pensamentos/${pentamento.id}`, pentamento)
            return await response.data
        } catch (error) {
            alert('Erro ao alterar pensamento')
            throw error
        }
    },

    async deleterPensamento(id){
        try {
            await axios.delete(`${URL_BASE}/pensamentos/${id}`)
        } catch (error) {
            alert('Erro ao deletar pensamento')
        }
    },

    async filtrarPensamentos(busca){
        try {
            const pensamentos = await this.buscarPensamentos()

            const pensamentosFiltrados = pensamentos.filter(pensamento => {
                return (pensamento.conteudo.toLowerCase().includes(busca.toLowerCase()) || pensamento.autoria.toLowerCase().includes(busca.toLowerCase()) )
            })
            return pensamentosFiltrados
        } catch (error) {
            alert('Erro ao filtrar pensamentos')
            throw error
        }
    },

    async atualizarFavorito(id, favorito){
        try {
            const response = await axios.patch(`${URL_BASE}/pensamentos/${id}`, {favorito})
            return response.data
            
        } catch (error) {
            alert('Erro ao atualizar o favorito')
            throw error
        }
    }
}

export default api