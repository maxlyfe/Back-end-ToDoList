const mongoose = require("mongoose");

const Conn = (url, user, pass, data) => {
  mongoose
    .connect(`${url}/${data}`, {
      user: user,
      pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Acesso ao banco de dados");
    })
    .catch((err) => console.log(err));
};

module.exports = Conn;
