const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const app = require('./app');
app.listen(PORT, () => console.log(`Servidor en ${PORT}`));

app.get('/', (req, res) => res.send('¡Hola, mundo!'));

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));

