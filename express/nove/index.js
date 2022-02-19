require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

async function connectiondb() {
    try {
        await mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('conectei ao db')
        app.emit('pronto')
    } catch (e) {
        console.log(e)
    }

}

connectiondb()

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const { middlewareGlobal, checkCsrfError, csrfMidleware } = require('./src/middlewares/middleware')
const { emit } = require('process')

app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'lsdjkfhsdkjhf',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname ,'src', 'views'))
app.set('view engine', 'ejs')

app.use(csrf())

// Meus middlewares
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMidleware)

app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => { console.log('Server is running at port 3000') })
})

