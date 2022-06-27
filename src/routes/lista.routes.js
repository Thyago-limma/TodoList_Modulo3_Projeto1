const express = require('express');
const listaController = require('../controllers/lista.controllers');
const router = express.Router();

router.get('/', listaController.initialController);
router.get('/allTarefas', listaController.findAllLista);
router.get('/tarefaById/:id', listaController.findTarefaById);
router.post('/createTarefa', listaController.createTarefa);
router.put('/updateTarefa/:id', listaController.updateTarefa);
router.delete('/deleteTarefa/:id', listaController.deleteTarefa);

module.exports = router;
