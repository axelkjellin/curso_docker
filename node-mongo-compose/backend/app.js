const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose.Promisse = global.Promisse;
mongoose.connect('mongodb://db/mydb')


//mid
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

//odm
const Client = restful.model('Client', {
    name:{ type:String, required:true } 
})

//rest api
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true})
Client.register(server, '/clients')

server.listen(3000)