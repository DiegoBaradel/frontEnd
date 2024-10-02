export function inspct(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value
        descriptor.value = function(...args: any[]){

            console.log(`--- metodo: ${propertyKey}`)
            console.log(`----- parâmetros: ${JSON.stringify(args)}`)
            
            const retorno = metodoOriginal.apply(this, args)
            
            console.log(`----- retorno: ${JSON.stringify(retorno)}`)

            return retorno
        }

        return descriptor
    }
}