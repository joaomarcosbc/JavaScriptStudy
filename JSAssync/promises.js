function mostraMensagem(mensagem) {
    return new Promise((resolve,reject) => {
        if (typeof mensagem !== 'string') reject('Erro')
        
        resolve(mensagem)
    })    
}

mostraMensagem('Primeiro')
    .then((mensagem) => {
        console.log(mensagem)
        return mostraMensagem('Segundo')
    })
    .then((mensagem) => {
        console.log(mensagem)
        return mostraMensagem('Terceiro')
    })
    .then((mensagem) => {
        console.log(mensagem)
    })
    .then(() => {
        console.log('Finalizada a Cadeia!')
    })
    .catch((err) => {
        console.log(err)
    })