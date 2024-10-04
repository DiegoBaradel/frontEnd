export function domInject(seletor: string){
    return function(targe:any, propertyKey:string){

        let elemento: HTMLInputElement | null = null

        const getter= function(){

            if (!elemento) {
                elemento = document.querySelector(seletor) as HTMLInputElement
            }

            return elemento
        }

        Object.defineProperty(
            targe,
            propertyKey,
            {get: getter}
        )

    }
}