function aparecePrimeiro (callback) {
    console.log('Isso aparece primeiro')
    if(callback) callback()
}

function apareceSegundo(callback) {
    console.log('Isso aparece segundo')
    if(callback) callback()
}

function apareceTerceiro(callback) {
    console.log('Isso aparece terceiro')
    if(callback) callback()
}

aparecePrimeiro(() => {
    apareceSegundo(() => {
        apareceTerceiro(() => {
            console.log('Finalizada a cadeia!')
        })
    })
})