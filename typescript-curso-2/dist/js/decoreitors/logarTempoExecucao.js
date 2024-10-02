export function logarTempoDeExecucao(unidade = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        let divisor = 1;
        let tempo = 'milissegundos';
        if (unidade) {
            divisor = 1000;
            tempo = 'segundos';
        }
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${tempo}`);
            return retorno;
        };
        return descriptor;
    };
}
