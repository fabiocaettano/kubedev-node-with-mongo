const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const routes = require('./src/routes')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/DBTest1',{
    useUnifiedTopology: true,
    useNewUrlParser: true
},function(err){
    if(err){
        console.log("Erro na Conexão")
        console.log(err)
    }else{
        console.log("MongoDb Conectado com Sucesso")
    }
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3003, function(){
    console.log("Servidor iniciado com sucesso.")
})