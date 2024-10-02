import { escapar } from "../decoreitors/escapar.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacaoView extends View<Negociacoes> {
    @escapar
    protected templeite(modelo: Negociacoes): string{
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${modelo.lista().map(itemNegociacao =>{
                        return`
                            <tr>
                                <td>${this.formatar(itemNegociacao.data)}</td>
                                <td>${itemNegociacao.quantidade}</td>
                                <td>${itemNegociacao.valor}</td>
                            </tr>
                        `
                    }).join(' ')}
                </tbody>
            </table>
        `;
    }

    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().format(data)

    }


}