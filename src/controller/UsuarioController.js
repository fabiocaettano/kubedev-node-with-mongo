const Usuario = require('../model/Usuario')

module.exports = {
    async index(req,res){
        const usuarios = await Usuario.find();
        res.json(usuarios)
    }
}