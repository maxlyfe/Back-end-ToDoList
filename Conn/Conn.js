const mongoose = require("mongoose");

const Conn = () => {
  mongoose
    .connect("mongodb://localhost:27017/Tarefas", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Acesso ao banco de dados");
    })
    .catch((err) => console.log(err));
};

module.exports = Conn;
