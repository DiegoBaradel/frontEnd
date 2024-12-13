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
    }
}

export default api