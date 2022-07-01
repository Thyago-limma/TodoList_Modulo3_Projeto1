function validLista(tarefa) {
    if (tarefa.tarefa && tarefa.descricao && tarefa.horario ) {
      for (let key in tarefa) {
        console.log(key, tarefa[key]);
      }
  
      return true;
    } else {
      return false;
    }
  }
  
  function validUpdateTarefa(tarefa) {
    if (tarefa.tarefa || tarefa.descricao || tarefa.horario ) {
      return tarefa;
    } else {
      throw new Error('Nenhum dado para ser atualizado');
    }
  }
  
  module.exports = { validLista, validUpdateTarefa };
  