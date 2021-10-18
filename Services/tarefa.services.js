const Tarefa = require("./../Models/Tarefa");

class TarefaServices {
  findAll = async () => await Tarefa.find();

  findById = async (id) => {
    return await Tarefa.findById(id);
  };

  criarTarefa = async (tarefa) => {
    return await Tarefa.create(tarefa);
  };

  upDateTarefa = async (id, tarefa) => {
    return await Tarefa.updateOne({ _id: id }, tarefa);
  };

  deleteTarefa = async (id) => {
    return await Tarefa.deleteOne({ _id: id });
  };
}

module.exports = TarefaServices;
