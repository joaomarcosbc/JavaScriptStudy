exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente) {
        console.log()
        console.log(`${req.body.cliente} no middleware global`)
        console.log()
    }

    next()
}