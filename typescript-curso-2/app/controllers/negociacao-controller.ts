import { domInject } from '../decoreitors/dom-inject.js';
import { logarTempoDeExecucao } from '../decoreitors/logarTempoExecucao.js';
import { DiasDaSemana } from '../enums/enum-diasDaSemana.js';
import { negociacaoDoDia } from '../interfaces/interfaceDeDados.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { obiterDadosService } from '../services/obterDadosService.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacao-view.js';

export class NegociacaoController {
    @domInject('#data')
    private inputData!: HTMLInputElement;
    @domInject('#quantidade')
    private inputQuantidade!: HTMLInputElement;
    @domInject('#valor')
    private inputValor!: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacaoView = new NegociacaoView('#negociacaoView');
    private mensagemView = new MensagemView('#mensagemView')
    private service = new obiterDadosService()

    constructor() {
        this.negociacaoView.update(this.negociacoes);
    }
    
    @logarTempoDeExecucao()
    adiciona(): void {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Falha em adicionar negociação. Apenas dias uteis são validos.')
            return 
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizarView()
        this.limparFormulario();
    }

    importaDado():void{

        this.service.obiterDados()
            .then(negociacaoDeHoje=>{
                for(let negociacao of negociacaoDeHoje){
                    this.negociacoes.adiciona(negociacao)
                }
            })
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizarView(): void{
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso')
    }

    private ehDiaUtil(data: Date): boolean{
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }
}
