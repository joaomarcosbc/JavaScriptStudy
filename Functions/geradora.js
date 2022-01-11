function* geradora1() {
    //Código
    yield 'Valor 1'
    //Código
    yield 'Valor 2'
    //Código
    yield 'Valor 3'
}

const g1 = geradora1()

/**console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next())
console.log(g1.next())**/

for(let valor of g1) {
    console.log(valor)
}

function* geradora2() {
    for(var i = 0; i < 3; i++) {
        yield i
    }
}

function* geradora3() {
    yield* geradora2()
    yield 3
    yield 4
}

const g3 = geradora3()
for(let valor of g3) {
    console.log(valor)
}