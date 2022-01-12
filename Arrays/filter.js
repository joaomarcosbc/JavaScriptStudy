const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//Filtrar elementos maiores que 10:

const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10
})

const numerosFiltrados = numeros.filter((valor) => valor > 10)
/**const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10
})**/

console.log(numerosFiltrados)