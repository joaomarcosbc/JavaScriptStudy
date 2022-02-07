exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente) {
        res.locals.variavelLocal = 'Este e o valor da var local'
        console.log()
        console.log(`${req.body.cliente} no middleware global`)
        console.log()
    }

    next()
}