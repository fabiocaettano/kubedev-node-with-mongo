const express = require('express')

const routes = express.Router();

routes.get('/',function(req,res){
    res.json({message: "Bem vindo ao Backend MongoDb"})
})

module.exports = routes;