const mongoose = require("mongoose");

const tarefaModelo = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: String, required: true },
  status: { type: String, required: true },
  prazo: { type: String, required: true },
  data: { type: Date, default: Date.now },
});

const Tarefa = mongoose.model("tarefa", tarefaModelo);

module.exports = Tarefa;
