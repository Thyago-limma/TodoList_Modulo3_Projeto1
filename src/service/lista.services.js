const Tarefa = require('../models/Tarefa')

const findAllLista = async () => {
  const allLista = await Tarefa.find();
  return allLista;
};

const findTarefaById = async(id) => {
  const oneTarefa = await Tarefa.findById();
  return oneTarefa;
};

const createTarefa = (tarefa) => {
  const createdTarefa = await Tarefa.create(tarefa)
};

const updateTarefa = (id, updatedTarefa) => {
  const updateTarefa = await Tarefa.findByIdAndUpdate(
    id,
    updatedTarefa,
  ).setOptions({ returnOriginal: false });
  return updateTarefa;
};


const deleteTarefa = async (id) => {
  return await Tarefa.findByIdAndDelete(id);
};

const initialService = () => {
  return 'hello world';
};

module.exports = {
  initialService,
  findAllLista,
  findTarefaById,
  createTarefa,
  deleteTarefa,
  updateTarefa,
};
