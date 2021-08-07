const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

const routes = require('./src/routes')

const app = express()


const mongoose = require('mongoose')

mongoose.connect('mongodb://10.1.90.167:27017/admin',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    auth:{
        user : "mongouser",
        password : "mongopwd"

    }
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