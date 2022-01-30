exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.trataPost = (req, res) => {
    res.send(`Bem vindo, ${req.body.nome}`)
}

