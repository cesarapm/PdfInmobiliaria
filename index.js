const express = require("express");
const app = express();
const fs = require("fs");

const path = require("path");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

const directorioImagenes = "./umpolad";

app.use("/pdfs", require("./routes/pdfs"));

app.use(express.static(directorioImagenes));

app.get("/imagenes", (req, res) => {
  fs.readdir(directorioImagenes, (err, archivos) => {
    if (err) {
      console.error("Error al leer el directorio:", err);
      res.sendStatus(500);
      return;
    }

    const imagenes = archivos.filter((archivo) => {
      const extension = path.extname(archivo).toLowerCase();
      return (
        extension === ".jpg" ||
        extension === ".jpeg" ||
        extension === ".png" ||
        extension === ".gif"
      );
    });

    res.json({ imagenes });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
