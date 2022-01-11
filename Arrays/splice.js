const nomes = ['João', 'Juba' , 'Arthur', 'Jó', 'Amanda', 'Larissa']
const nomes2 = [...nomes]


//nomes.splice(indice, delete, el1, el2)  ---> elemento substitui o antigo pelo passado no parametro

//-----removendo os ultimos elemento:
const removidosFinal = nomes2.splice(nomes2.length - 1, 1, 'Nariz')
//const removidosFinal = nomes2.splice(- (nomes2.length - (nomes2.length -1 )), 1)
console.log(nomes2, removidosFinal)


//-----removendo os primeiros elemento
const removidosInicio = nomes2.splice(-nomes2.length, 2, 'JM', 'Jujuba')
//const removidosInicio = nomes2.splice(0, 2, 'JM', 'Jujuba')
console.log(nomes2, removidosInicio)

//Simula o  Push:
nomes2.splice(nomes2.length, 0, 'Elemento Push')
console.log(nomes2)

//Simula Unhift:
nomes2.splice(0, 0, 'Elemento Shift')
nomes2.splice(nomes2.length - nomes2.length, 0, 'Elemento Shift')
console.log(nomes2)