export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(data, quantidade, valor) {
        const exp = /-/g;
        const dataFromat = new Date(data.replace(exp, ','));
        const quantidadeFromat = parseInt(quantidade);
        const valorFromat = parseFloat(valor);
        return new Negociacao(dataFromat, quantidadeFromat, valorFromat);
    }
}