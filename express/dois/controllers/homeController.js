exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="" method="post">
        <input type"text" name="nome" placeholder="nome"><br>
        <input type"text" name="sobrenome" placeholder="sobrenome">
        <input type="submit" value="enviar">
    </form>
    `)
}

exports.trataPost = (req, res) => {
    res.send(`Bem vindo, ${req.body.nome}`)
}

