export function logarTempoDeExecucao(unidade : boolean = false){

    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value

        let divisor= 1
        let tempo = 'milissegundos'
        if (unidade) {
            divisor = 1000
            tempo = 'segundos'
        }

        descriptor.value = function(...args: any[]){
            const t1 = performance.now()
            const retorno = metodoOriginal.apply(this, args)
            const t2 = performance.now()
            return retorno
        }
        return descriptor;
    }
}