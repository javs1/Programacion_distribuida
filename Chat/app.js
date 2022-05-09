const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket)=>{

  /*socket.on('disconnect',()=>{
    console.log('Desconexion')
  })

  socket.on('mensaje', (msg)=>{
    console.log('Mensaje: '+msg)
  })*/

  socket.on('mensaje', (msg)=>{
    io.emit('mensaje', (msg))
  })
})

app.get('/',(req,res)=>{
  res.sendFile('C:/Users/PC/Desktop/Programacion_distribuida/Chat/cliente/index.html')
})

server.listen(3000, ()=>{
  console.log('hola')
})