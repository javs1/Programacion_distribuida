/* NODE
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("respuesta del servidor...");
  res.end("Te envio un saludo desde el servidor con node.js v2");
});

const puerto = 3001;

server.listen(puerto, () => {
  console.log("Escuchando...");
});
*/

// EXPRESS
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const usr = 'jav';
const pass = 'rojo123rojo';
const dbname = 'Cluster0';
const uri = `mongodb+srv://${usr}:${pass}@${dbname}.3kewh.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/views"));

app.use('/', require('./routers/rutas.js'))

app.use((req, res, next) => {
  res.status(404).render("404", { titulo: "Página 404", tituloweb: 'Error EJS' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});