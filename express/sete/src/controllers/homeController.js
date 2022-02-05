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
    // req.session.usuario = { nome: 'Joao', logado: true }
    // req.flash('info', 'Ola flash info')
    // req.flash('error', 'Ola flash error')
    // req.flash('success', 'Ola flash success')
    // res.render('index')
    res.render('index')
    return // finalizada a req
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}

