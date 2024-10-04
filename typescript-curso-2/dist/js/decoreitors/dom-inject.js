export function domInject(seletor) {
    return function (targe, propertyKey) {
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(targe, propertyKey, { get: getter });
    };
}
