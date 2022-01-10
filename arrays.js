const nomes = ['João', 'Juba' , 'Arthur', 'Jó', 'Amanda', 'Larissa']


//Cópia de um array sem interferência:
const nomes2 = [...nomes]

//Pop: Retira elemento do final do array (o elemento retirado pode ser armazenado numa variável)
const removidoFinal = nomes.pop()
console.log(nomes, removidoFinal)

//Shift: Retira elemento do início do array (o elemento retirado pode ser armazenado numa variável)
const removidoInicio = nomes.shift()
console.log(nomes, removidoInicio)


//Push: Adiciona no final do array
const adicionadaNoFinal = nomes.push('Larissa')
console.log(`O elemento ${nomes[adicionadaNoFinal - 1]} foi adicionado no final.`)

//Unshift: Adiciona no início do array
const adicionadaNoInicio = nomes.unshift('João')
console.log(`O elemento ${nomes[adicionadaNoInicio - adicionadaNoInicio]} foi adicionado no início.`)

/** Slice: Fatia o array. Parãmetros: (indice inicial, indice final), se o índice final for negativo
o indice final começa a contar da direita **/

console.log(nomes)
console.log(nomes2)


//Split: Transforma string num array:
const nome = 'Ana Júlia Siqueira Guimarães'
const nomeCompleto = nome.split(' ')
console.log(nomeCompleto)

//Join: Transforma array em string:
const nomeCompleto2 = nomeCompleto.join(' ')
console.log(nomeCompleto2)
