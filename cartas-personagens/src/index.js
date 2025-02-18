import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiroMago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const guerreiraJorge = new Guerreiro('Jorge', 7)
const tonhaoBolaDeFogo = new Mago('Tonhão bola de fogo','fogo',10,8)
const janna = new Mago('Janna','gelo',7,10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const arqueiroMagoLucas = new ArqueiroMago('Lucas', 10, 'ar', 4, 8)

const personagens = [tonhaoBolaDeFogo, janna, arqueiroBruno, arqueiroMagoLucas, guerreiraJorge]

new PersonagemView(personagens).render()