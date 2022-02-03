const express = require('express')

const route = express.Router()

const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

/**function meuMidleWare(req, res, next) {
    console.log()
    console.log('passei no midleware')
    console.log()
    next()
}**/


//Rotas Home
route.get('/',/**meuMidleWare,**/ homeController.paginaInicial)
route.post('/', homeController.trataPost)

//Rotas Contato
route.get('/contato', contatoController.contatoInicial)


module.exports = route