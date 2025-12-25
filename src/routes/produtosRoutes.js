const { Router } = require('express')
const ProdutosController = require('../controllers/produtosController')

const router = Router()

router
    .post('/produtos', ProdutosController.cadastrar)
    .get('/produtos', ProdutosController.buscar)
    .delete('/produtos/:id', ProdutosController.deletar)

module.exports = router