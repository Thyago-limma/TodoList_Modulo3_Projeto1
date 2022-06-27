const { v4: uuidv4 } = require('uuid');

const lista = [
  {
    id: '2',
    Tarefa: 'Oficina',
    Descricao: 'Levar o Carro á Oficina Para Conserto do Motor',
    Horario: 09.0,
  },
  {
    id: '1',
    Tarefa: 'Compras',
    Descricao: 'Ir ao Mercado e Fazer as Compras do Mês',
    Horario: 14.0,
  },
];

const findAllLista = () => lista;

const findTarefaById = (id) => {
  let indice = 0;
  const tarefaById = lista.map((tarefa, index) => {
    if (tarefa.id === id) {
      indice = index;
      return tarefa;
    }
  });
  return tarefaById[indice];
};

const createTarefa = (tarefa) => {
  tarefa.id = uuidv4();
  lista.push(tarefa);
  return lista;
};

const updateTarefa = (id, updatedTarefa) => {
  lista.forEach((tarefa, index) => {
    if (tarefa.id === id) {
      updatedTarefa.id = id;
      lista[index] = updatedTarefa;
    }
  });

  return lista;
};

const deleteTarefa = (id) => {
  lista.forEach((tarefa, index) => {
    if (tarefa.id === id) {
      lista.splice(index, 1);
    }
  });
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
