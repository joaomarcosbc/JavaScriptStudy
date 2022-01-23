function mostraMensagem(mensagem) {
    return new Promise((resolve,reject) => {
        if (typeof mensagem !== 'string') reject('Erro')
        
        resolve(mensagem)
    })    
}

async function execute() {
    try {
        const f1 = await mostraMensagem('Primeiro')
        console.log(f1)
        const f2 = await mostraMensagem('Segundo')
        console.log(f2)
        const f3 = await mostraMensagem('Terceiro')
        console.log(f3)
        console.log('Cadeia Finalizada!')  
    } catch (e) {
        console.log(e)
    }
}

execute()