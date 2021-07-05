const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()


// Parte que faz a renderizar arquivos html encurtados usando ejs
route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) 
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-password'}))
//-------------------------------------------------------------------

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

// Formato que o formulario de dentro da modal tem que passsar a informação
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route