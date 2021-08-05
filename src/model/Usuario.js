const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome: String,
    senha: String
})

const usuario = mongoose.model("Usuario", DataSchuema)
module.exports = usuario;