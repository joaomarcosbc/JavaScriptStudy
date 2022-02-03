require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

async function connection() {
    try {
        await mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('conectei ao db')
        app.emit('pronto')
    } catch (e) {
        console.log(e)
    }

}

connection()

const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')
const { emit } = require('process')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname ,'src', 'views'))
app.set('view engine', 'ejs')

app.use(meuMiddleware.middlewareGlobal)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => { console.log('Server is running at port 3000') })
})

