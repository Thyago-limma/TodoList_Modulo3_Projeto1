const listaService = require('../service/lista.services');

const initialController = (req, res) => {
  console.log(req.headers['user-agent']);
  if (req.headers['user-agent'].slice(0, 7) == 'Thunder') {
    res.send('Thunder client não esta autorizado');
  }
  const response = listaService.initialService();
  res.send(response);
};

const findAllLista = (req, res) => {
  res.send(listaService.findAllLista());
};

const findTarefaById = (req, res) => {
  const id = req.params.id;

  const response = listaService.findTarefaById(id);
  if (response === undefined) {
    res.status(204).send({ message: 'Nenhuma Tarefa encontrada' });
  } else {
    res.send({ message: 'Tarefa encontrada com sucesso', data: response });
  }
};

const createTarefa = (req, res) => {
  const tarefa = req.body;
  if (
    tarefa.Tarefa === '' ||
    tarefa.Descricao === '' ||
    tarefa.Horario === ''
  ) {
    res.status(400).send({ message: 'Dados da Tarefa incompletos' });
  }
  const response = listaService.createTarefa(tarefa);
  res
    .status(201)
    .send({ message: 'Tarefa criada com sucesso', data: response });
};

const updateTarefa = (req, res) => {
  const id = req.params.id;
  const updatedTarefa = req.body;
  const response = listaService.updateTarefa(id, updatedTarefa);
  if (response !== undefined) {
    res.send({ message: 'Tarefa Atualizada com sucesso', data: response });
  } else {
    res.send({ message: 'Nenhuma Tarefa foi encontrada' });
  }
};

const deleteTarefa = (req, res) => {
  const id = parseInt(req.params.id);
  const response = listaService.deleteTarefa(id);
  res.send(response);
};

module.exports = {
  initialController,
  findAllLista,
  findTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
