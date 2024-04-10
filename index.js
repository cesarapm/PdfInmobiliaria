const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");

const path = require("path");

app.use(express.json());

var corsOptions = {
  origin: "*", // Reemplazar con dominio
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      fontSrc: ["'self'", "<URL>"],
    },
  })
);

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

const directorioImagenes = "./umpolad";

app.use("/pdfss", require("./routes/pdfs"));

app.use("/pr", require("./routes/ptpdf"));

app.use("/imgs", require("./routes/datos"));
app.use("/var", require("./routes/variable"));
app.use("/borrar", require("./routes/borrar"));

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

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Listening to port ${port}`));
