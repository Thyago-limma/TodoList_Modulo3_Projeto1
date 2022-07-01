const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  Tarefa: { type: String, required: true },
  Descricao: { type: String, required: true },
  Horario: { type: Number, required: true },
});

const Tarefa = mongoose.model('lista', TarefaSchema);

module.exports = Tarefa;