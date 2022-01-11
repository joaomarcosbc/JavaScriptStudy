//Função que se chama de volta dentro do próprio escopo

function recursividade(num) {
    console.log(num)
    if(num >= 1000) return
    num++
    recursividade(num)
}

recursividade(0)