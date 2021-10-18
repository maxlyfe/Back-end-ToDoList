const mongoose = require("mongoose");

const TarefaServices = require("./../Services/tarefa.services");

const tarefaService = new TarefaServices();

class TarefasController {
  // [GET]
  getTarefas = async (req, res) => {
    const tarefa = await tarefaService.findAll();
    res.send(tarefa);
  };

  // [GET By ID]
  getTarefaById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send("ID inexistente");
      return;
    }
    const tarefa = await tarefaService.findById(id);

    if (!tarefa) {
      res.status(404).send("Tarefa Inexistente");
    }
    res.status(200).send(tarefa);
  };

  //[POST]
  createTarefa = async (req, res) => {
    const tarefa = req.body;
    const tarefaSalva = await tarefaService.criarTarefa(tarefa);
    res.send({
      message: `Tarefa Adicionada com sucesso.`,
    });
  };

  //[PUT]
  upDateTarefa = async (req, res) => {
    const id = req.params.id;
    const tarefa = req.body;
    await tarefaService
      .upDateTarefa(id, tarefa)
      .then(() => {
        res.status(200).send({ message: "Tarefa atualizada" });
      })
      .catch((err) => {
        console.log(err), res.status(400).send({ error: err });
      });
  };

  //[DELETE]
  DeleteTarefa = async (req, res) => {
    const id = req.params.id;
    await tarefaService.deleteTarefa(id);
    res.send({
      message: "Tarefa excluida",
    });
  };
}

module.exports = TarefasController;
