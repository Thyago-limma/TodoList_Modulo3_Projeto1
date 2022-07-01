const listaService = require('../service/lista.services');
const ValidationService = require('../service/validation.service');
const mongoose = require('mongoose');

const initialController = (req, res) => {
  console.log(req.headers['user-agent']);
  if (req.headers['user-agent'].slice(0, 7) == 'Thunder') {
    res.send('Thunder client não esta autorizado');
  }
  const response = listaService.initialService();
  res.send(response);
};

const findAllLista = async (req, res) => {
const allLista = await listaService.findAllLista();

if (allLista.length == 0) {
  return res
    .status(206)
    .send({ message: 'Não existe nenhuma Tarefa cadastrada!' });
}
res.send(allLista);
};

const findTarefaById = async(req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const response = await listaService.findTarefaById(id);
  if (response === undefined) {
    res.status(204).send({ message: 'Nenhuma Tarefa encontrada' });
  } else {
    res.send({ message: 'Tarefa encontrada com sucesso', data: response });
  }
};

const createTarefa = async(req, res) => {
  const tarefa = req.body;

  if (
    tarefa.Tarefa === '' ||
    tarefa.Descricao === '' ||
    tarefa.Horario === ''
  ) {
    res.status(400).send({ message: 'Dados da Tarefa incompletos' });
  }
  const response = await listaService.createTarefa(tarefa);
  res
    .status(201)
    .send({ message: 'Tarefa criada com sucesso', data: response });
};

const updateTarefa = async (req, res) => {
  const id = req.params.id;
  const tarefaEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const chosenTarefa = await listaService.findTarefaById(id);

  if (!chosenTarefa) {
    return res.status(206).send({ message: 'Tarefa não encontrada!' });
  }

  if( !tarefaEdit ||
      !tarefaEdit.Tarefa ||
      !tarefaEdit.Descricao ||
      !tarefaEdit.Horario
    ){
      return res.status(400).send({
        message: 'Você não preencheu todos os dados para editar a Tarefa!',
      });
};

const updatedTarefa = await listaService.updateTarefa(id, tarefaEdit);

  res.send(updatedTarefa);

};

const deleteTarefa = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const chosenTarefa = listaService.deleteTarefa(id);
  
  if (!chosenTarefa) {
    return res.status(206).send({ message: 'Tarefa não encontrada!' });
  }

  await listaService.deleteTarefa(id);

  res.status(204).send();

};

module.exports = {
  initialController,
  findAllLista,
  findTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
