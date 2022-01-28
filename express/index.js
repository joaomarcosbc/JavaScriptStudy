const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => { console.log('Server is running at port 3000') })

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
        <input type"text" name="nome" placeholder="nome"><br>
        <input type"text" name="sobrenome" placeholder="sobrenome">
        <input type="submit" value="enviar">
    </form>
    `)
})

app.get('/testes/:nome_usuario?/:idade_usuario?', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`${req.body.nome}`)
})