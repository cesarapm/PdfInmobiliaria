const express = require("express");
const router = express.Router();
const pdf = require("html-pdf");

router.post("/", (req, res) => {
  // Obtener el contenido HTML del cuerpo de la solicitud
  const htmlContent = req.body.htmlContent;

  // Opciones de configuración para la generación del PDF
  const options = {
    format: "Letter", // Formato del papel
  };

  // Generar el PDF a partir del contenido HTML
  pdf.create(htmlContent, options).toStream((err, stream) => {
    if (err) {
      console.error("Error al generar PDF:", err);
      res.status(500).send("Error al generar PDF");
    } else {
      // Establecer los encabezados para la respuesta
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=archivo.pdf");

      // Enviar el PDF como respuesta
      stream.pipe(res);
    }
  });
});

module.exports = router;