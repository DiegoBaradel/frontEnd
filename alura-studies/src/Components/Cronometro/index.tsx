import { useEffect, useState } from 'react'
import { paraSegundos } from '../../common/utils/date'
import ITarefa from '../../type'
import Botao from '../Botao'
import style from  './cronometro.module.scss'
import Relogio from './Relogio'

interface CronometroProps{
    selecionado: ITarefa | undefined,
    finalizarTarefa: ()=> void
}

const Cronometro = ({selecionado, finalizarTarefa}: CronometroProps) =>{

    const [tempo, setTempo] = useState<number>()

    useEffect(()=>{
        if (selecionado?.tempo) {
                setTempo(paraSegundos(selecionado.tempo))
        }
    },[selecionado])

    const temporizador = (contador : number = 0)=>{
        console.log('clicou')
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return temporizador(contador - 1);
            }
            finalizarTarefa()
        }, 1000);
    }
    
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Relogio
                    tempo = {tempo}
                />
            </div>
            <Botao onClick={()=>temporizador(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}

export default Cronometro