const { Router } = require("express");
const router = new Router();

const request = require("request");

const fs = require("fs");

router.get("/", async (req, res) => {
  res.send("¡Hola, mundo de Gatitos !");
  console.log(req.query);

  const { nombre, email, precios, title, description } = req.query;

  global.nombre = nombre;
  global.email = email;
  global.precios = precios;

  global.ubicacion =
    req.query.ubicacion.street +
    " " +
    req.query.ubicacion.exterior_number +
    " " +
    req.query.ubicacion.interior_number +
    " " +
    req.query.ubicacion.name;

  global.title = title;

  global.description = description;
});

module.exports = router;
