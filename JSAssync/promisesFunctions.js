// .all .race .resolve .reject

function mostraMensagem(mensagem) {
    return new Promise((resolve,reject) => {
        if (typeof mensagem !== 'string'){
            reject('Erro')
            return
        }
        
        resolve(mensagem)
    })    
}

const valores = [
    'Primeiro Valor',
    mostraMensagem('Primeira'),
    mostraMensagem('Segunda'),
    4,
    //mostraMensagem(4),
    mostraMensagem('Terceira'),
    'Outro Valor'
]

Promise.all(valores)
    .then((valor) => {
        console.log(valor)
    })
    .catch((err) => {
        console.log(err)
    })

console.log()

Promise.race(valores)
    .then((valor) => {
        console.log(valor)
    })
    .catch((err) => {
        console.log(err)
    })

