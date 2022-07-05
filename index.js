const express = require('express');
const cors = require('cors');
const listaRoutes = require('./src/routes/lista.routes');
const connectToDatabase = require('./src/database/mongoConecction');

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

connectToDatabase();

app.use('/lista', listaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
