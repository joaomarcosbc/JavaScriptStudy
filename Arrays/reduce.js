const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

var total = numeros.reduce((acumulador, numero, indice, original) => {
    console.info(`${acumulador} total até o momento`);
    console.log(`${numero} valor atual`);
    console.log(`${indice} indice atual`);
    console.log(`${original} array original`);
    return acumulador += numero;
    }, 0)
    console.warn('Finalizado');
    console.log(total)