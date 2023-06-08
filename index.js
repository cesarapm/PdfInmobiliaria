const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/pdfs", require("./routes/pdfs"));

app.listen(3000, () => {
  console.log("Servidor en ejecución en el puerto 3000");
});
