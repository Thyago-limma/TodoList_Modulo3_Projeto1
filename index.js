const express = require('express');
const cors = require('cors');
const listaRoutes = require('./src/routes/lista.routes');

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/lista', listaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
