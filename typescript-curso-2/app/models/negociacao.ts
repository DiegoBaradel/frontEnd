export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(data: string, quantidade:string, valor:string): Negociacao{
        const exp = /-/g;
        const dataFromat = new Date(data.replace(exp, ','));
        const quantidadeFromat = parseInt(quantidade);
        const valorFromat = parseFloat(valor);
        return new Negociacao(dataFromat, quantidadeFromat, valorFromat);
    }
}