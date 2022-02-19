exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente) {
        res.locals.variavelLocal = 'Este e o valor da var local'
        console.log()
        console.log(`${req.body.cliente} no middleware global`)
        console.log()
    }

    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')
    }

    next()
}

exports.csrfMidleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}