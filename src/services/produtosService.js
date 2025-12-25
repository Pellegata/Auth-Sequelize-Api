const database = require('../models')
const uuid = require('uuid')

class ProdutosService {
    async cadastrar(dto) {
        try {
            const produto = await database.produtos.create({
                id: uuid.v4(),
                nome: dto.nome,
                preco: dto.preco,
                descricao: dto.descricao
            })
            return produto            
        } catch (error) {
            throw new Error('Erro ao cadastrar produto')
        }
    }
    async buscar() {
        try {
            const produtos = await database.produtos.findAll()
            return produtos
        } catch (error) {
            throw new Error('Erro na busca')
        }
    }
    async deletar(dto) {
        const produto = await database.produtos.findOne({
            where: {
                id: dto.id
            }
        })
        if(!produto) {
            throw new Error('Produto não encontrador')
        }
        try {
            await produto.destroy()
        } catch (error) {
            throw new Error('Erro ao deletar produto')
        }
    }
}

module.exports = ProdutosService