const { Router } = require("express");
const router = new Router();

const request = require("request");

const fs = require("fs");
const path = require("path");

const filePath1 = path.join(__dirname, "../umpolad/img1.PNG");
const filePath2 = path.join(__dirname, "../umpolad/img2.PNG");
const filePath3 = path.join(__dirname, "../umpolad/img3.PNG");
const filePath4 = path.join(__dirname, "../umpolad/img4.PNG");
const filePath5 = path.join(__dirname, "../umpolad/img5.PNG");
const filePath6 = path.join(__dirname, "../umpolad/img6.PNG");

router.get("/", async (req, res) => {
  //   res.send("¡Hola, mundo de Gatitos !");
  console.log(req.query);

  fs.unlink(filePath1, (error) => {
    if (error) {
      console.error("Error al borrar la imagen:", error);
      res.status(500).send("Error al borrar la imagen.");
    } else {
      console.log("La imagen se ha borrado correctamente.");
      res.send("La imagen se ha borrado correctamente.");
    }
  });
  fs.unlink(filePath2, (error) => {
    if (error) {
      console.error("Error al borrar la imagen:", error);
      res.status(500).send("Error al borrar la imagen.");
    } else {
      console.log("La imagen se ha borrado correctamente.");
      res.send("La imagen se ha borrado correctamente.");
    }
  });

  fs.unlink(filePath3, (error) => {
    if (error) {
      console.error("Error al borrar la imagen:", error);
      res.status(500).send("Error al borrar la imagen.");
    } else {
      console.log("La imagen se ha borrado correctamente.");
      res.send("La imagen se ha borrado correctamente.");
    }
  });
  fs.unlink(filePath4, (error) => {
    if (error) {
      console.error("Error al borrar la imagen:", error);
      res.status(500).send("Error al borrar la imagen.");
    } else {
      console.log("La imagen se ha borrado correctamente.");
      res.send("La imagen se ha borrado correctamente.");
    }
  });
  fs.unlink(filePath5, (error) => {
    if (error) {
      console.error("Error al borrar la imagen:", error);
      res.status(500).send("Error al borrar la imagen.");
    } else {
      console.log("La imagen se ha borrado correctamente.");
      res.send("La imagen se ha borrado correctamente.");
    }
  });
  fs.unlink(filePath6, (error) => {
    if (error) {
      console.error("Error al borrar la imagen:", error);
      res.status(500).send("Error al borrar la imagen.");
    } else {
      console.log("La imagen se ha borrado correctamente.");
      res.send("La imagen se ha borrado correctamente.");
    }
  });
});

module.exports = router;
