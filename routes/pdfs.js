const { Router } = require("express");
const router = new Router();

const request = require("request");
const PDFDocument = require("pdfkit");
const path = require("path");

const fs = require("fs");
const imgdole = require("../dow").dowload;

router.get("/", async (req, res) => {
  const uriimg = null;

  // "https://assets.easybroker.com/property_images/3720688/60850451/EB-NH0688.jpg?version=1683171550";

  let imagePreview =
    "https://previews.123rf.com/images/dxinerz/dxinerz1602/dxinerz160203664/52406066-insertar-imagen-el-color-del-icono-del-vector-image-can-tambi%C3%A9n-ser-utilizado-para-la-edici%C3%B3n-de.jpg";

  if (uriimg == null) {
    const nomfile = "./umpolad/img2.PNG";

    imgdole(imagePreview, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  } else {
    const nomfile = "./umpolad/img2.PNG";

    imgdole(uriimg, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  }

  // //   res.send("hello world");

  const doc = new PDFDocument();

  const filePath = path.join(__dirname, "../umpolad/img1.PNG");

  // doc.pipe(fs.createWriteStream("output.pdf"));
  // Configurar la respuesta HTTP para que sea un archivo PDF
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="archivo.pdf"');

  // Enviar el PDF generado como respuesta
  doc.pipe(res);

  // Agregar texto al PDF

  doc.image(filePath, {
    fit: [250, 300],
    align: "center",
    valign: "center",
  });
  doc
    .fontSize(16)
    .text("¡Hola, este es un ejemplo de PDF generado con PDFKit y Express!");

  // Finalizar el PDF y enviar la respuesta
  doc.end();
});

module.exports = router;
