// src/app.js
const express = require('express');

// 1) Instancia de Express
const app = express();

// 2) Rutas requeridas
app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express');
});

app.post('/', (req, res) => {
  res.send('manejo de peticiones POST');
});

app.put('/', (req, res) => {
  res.send('manejo de peticiones PUT');
});

app.delete('/', (req, res) => {
  res.send('manejo de peticiones DELETE');
});

// 3) Puerto e instancia del servidor (el test espera poder cerrar este server)
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

// 4) Exporta el server (y también la app por si acaso)
module.exports = server;
module.exports.app = app;
 