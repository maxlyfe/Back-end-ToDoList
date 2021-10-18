const express = require("express");

const TarefasController = require("./../Controllers/tarefa.controller");

const router = express.Router();
const tarefaController = new TarefasController();

router.get("/", tarefaController.getTarefas);

router.get("/:id", tarefaController.getTarefaById);

router.post("/adicionar", tarefaController.createTarefa);

router.put("/atualizar/:id", tarefaController.upDateTarefa);

router.delete("/deletar/:id", tarefaController.DeleteTarefa);

module.exports = router;
