import style from './relogio.module.scss'

interface RelogioProps{
  tempo: number | undefined
}

function Relogio({tempo = 0}:RelogioProps) {

  const [minutosDezena, minutosUnidade] = String(Math.floor(tempo/60)).padStart(2,'0')
  const [segundosDezena, segundosUnidade] = String(Math.floor(tempo%60)).padStart(2,'0')

    return (
       <>
         <span className={style.relogioNumero}>{minutosDezena}</span>
         <span className={style.relogioNumero}>{minutosUnidade}</span>
         <span className={style.relogioDivisao}>:</span>
         <span className={style.relogioNumero}>{segundosDezena}</span>
         <span className={style.relogioNumero}>{segundosUnidade}</span>
      </>
    )
}

export default Relogio