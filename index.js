const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const TarefasRouters = require("./Routes/tarefas.routes");
const Conn = require("./Conn/Conn");

Conn();

app.use("/tarefas", TarefasRouters);

const port = 3001;

app.listen(port, () => {
  console.log(`App rodando.`);
});
