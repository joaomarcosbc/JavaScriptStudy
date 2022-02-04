// const HomeModel = require('../models/HomeModel')

/**async function criaTeste() {
    try {
        const  dados = await HomeModel.find()
        console.log(dados)
    } catch(err) {
        console.log(err)
    }
}

criaTeste()**/

exports.paginaInicial = (req, res) => {
    res.render('index')
    return // finalizada a req
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}

