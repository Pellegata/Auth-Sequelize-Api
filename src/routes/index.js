const express = require('express')
const produtos = require('./produtosRoutes')

module.exports = (app) => {
    app.use(
        express.json(),
        produtos
    )
}