const express = require('express')

const route = express.Router()

const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

//Rotas Home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

//Rotas Contato
route.get('/contato', contatoController.contatoInicial)


module.exports = route