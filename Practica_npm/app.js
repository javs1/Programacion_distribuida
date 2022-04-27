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

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/1", (req, res) => {
  res.send("AAAAA");
});

app.get("/contacto", (req, res) => {
  res.send("Hola");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});