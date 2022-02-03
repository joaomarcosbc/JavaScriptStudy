exports.paginaInicial = (req, res) => {
    res.render('index')
    return // finalizada a req
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}

