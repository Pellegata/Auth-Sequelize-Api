const ProdutosService = require('../services/produtosService')
const produtosService = new ProdutosService

class ProdutosController {
    static async cadastrar(req, res) {
        const { nome, preco, descricao } = req.body
        try {
            const produto = await produtosService.cadastrar({ nome, preco, descricao})
            res.status(201).send(produto)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async buscar(req, res) {
        try {
            const produtos = await produtosService.buscar()
            res.status(200).send(produtos)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async deletar(req, res) {
        const { id } = req.params
        try {
            await produtosService.deletar({ id })
            res.status(200).send({ message: 'Produto deletado'})
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = ProdutosController