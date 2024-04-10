const { Router } = require("express");
const router = new Router();
const fs = require("fs");

router.get("/", async (req, res) => {
  res.send("¡Hola, mundo de Gatitos!");

  const { id, nombre, email, precios, title, description, amenidades, pisos, baños, dormitorios, construccion, terreno, estacionamiento, medios_baños } = req.query;

  global.id = id;
  global.nombre = nombre;
  global.email = email;
  global.precios = precios;

  global.ubicacion = `${req.query.ubicacion.street} ${req.query.ubicacion.exterior_number} ${req.query.ubicacion.interior_number} ${req.query.ubicacion.name}`;

  global.title = title;
  global.description = description;
  global.amenidades = amenidades;
  global.pisos = pisos;
  global.baños = baños;
  global.dormitorios = dormitorios;
  global.construccion = construccion;
  global.terreno = terreno;
  global.estacionamiento = estacionamiento;
  global.medios_baños = medios_baños;
});

module.exports = router;

