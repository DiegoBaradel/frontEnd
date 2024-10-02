import { View } from "./view.js";
export class MensagemView extends View {
    templeite(mensagem) {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `;
    }
}
