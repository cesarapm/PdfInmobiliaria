const { Router } = require("express");
const router = new Router();

const request = require("request");
const PDFDocument = require("pdfkit");


const path = require("path");
 
const fs = require("fs");
const imgdole = require("../dow").dowload;



router.get("/", async (req, res) => {
  // //   res.send("hello world");

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="archivo.pdf"');
  res.set(
    "Content-Security-Policy",
    "font-src 'self' data:; img-src 'self' data:; default-src 'self' http://localhost:3020/pdfss'"
  );

  const doc = new PDFDocument();

  const filePath1 = path.join(__dirname, "../umpolad/img1.PNG");
  const filePath2 = path.join(__dirname, "../umpolad/img2.PNG");
  const filePath3 = path.join(__dirname, "../umpolad/img3.PNG");
  const filePath4 = path.join(__dirname, "../umpolad/img4.PNG");
  const filePath5 = path.join(__dirname, "../umpolad/img5.PNG");
  const filePath6 = path.join(__dirname, "../umpolad/img6.PNG");

  const logoPath = path.join(__dirname, "../umpolad/logsd.png");

  // doc.pipe(fs.createWriteStream("output.pdf"));
  // Configurar la respuesta HTTP para que sea un archivo PDF

  // Enviar el PDF generado como respuesta

  const fontPath = path.join(__dirname, "../umpolad/Alice-Regular.ttf");;

// Cargar la fuente personalizada
doc.font(fontPath);

  const rectX = 10;
const rectY = 10;
const rectWidth = 100;
const rectHeight = 90;
doc.rect(rectX, rectY, rectWidth, rectHeight).fillColor('#b32222').fill();
const logo = fs.readFileSync(logoPath);

  await doc.pipe(res);



  // Agregar texto al PDF
  const x1 = 50;
  const y1 = 50;
  const x2 = 300;
  const y2 = 50;
  const x3 = 50;
  const y3 = 300;
  const x4 = 300;
  const y4 = 300;
  const x5 = 50;
  const y5 = 550;
  const x6 = 300;

  const y6 = 550;
  const width = 230;
  const height = 230;


  doc.image(logo, rectX + 10, rectY + 10, { width: 80 });
  doc.fillColor('black');

  doc.fontSize(15).text("Nombre: " + global.nombre, 10, 120);
  doc.fontSize(15).text("Email: " + global.email, 10, 140);
  doc.fontSize(15).text("Precios: " + global.precios, 10, 160);
  doc.fontSize(15).text("Ubicacion: " + global.ubicacion, 10, 180);


  doc.fontSize(17).text("Titulo: " + global.title, 10, 220);
  doc.fontSize(15).text("Public Id: " + global.id, 10, 240);
  doc.fontSize(15).text("Pisos: " + global.pisos, 10, 260);
  doc.fontSize(15).text("Baños: " + global.baños, 10, 280);
  doc.fontSize(15).text("Recamaras: " + global.dormitorios, 10, 300);
  doc.fontSize(15).text("Tamaño de Construccion: " + global.construccion, 10, 320);
  doc.fontSize(15).text("Tamaño de Terreno: " + global.terreno, 10, 340);
  doc.fontSize(15).text("Estacionamiento: " + global.estacionamiento, 10, 360);
  doc.fontSize(15).text("Medios Baños:: " + global.medios_baños, 10, 380);

  




  doc.fontSize(18).text("Description: " + global.description, 10, 400);
doc.fontSize(18).text("Amenidades:", 10, 485);
global.amenidades.forEach((amenidad, index) => {
  doc.fontSize(15).text(`${index + 1}. ${amenidad.name}`, 20, 520 + index * 20);
});




  doc.addPage().image(
    filePath1,
    x1,
    y1,
    { width: width, height: height },
    {
      align: "center",
      valign: "center",
    }

  )
  doc.rect(x1, y1, width, height).strokeColor('#b32222').lineWidth(4).stroke();

  


  doc.image(
    filePath2,
    x2,
    y2,
    { width: width, height: height },
    {
      align: "center",
      valign: "center",
    }
  );
  doc.rect(x2, y2, width, height).strokeColor('#b32222').lineWidth(4).stroke();

  doc.image(
    filePath3,
    x3,
    y3,
    { width: width, height: height },
    {
      align: "center",
      valign: "center",
    }
  );

  doc.rect(x3, y3, width, height).strokeColor('#b32222').lineWidth(4).stroke();


  doc.image(
    filePath4,
    x4,
    y4,
    { width: width, height: height },
    {
      align: "center",
      valign: "center",
    }
  );

  doc.rect(x4, y4, width, height).strokeColor('#b32222').lineWidth(4).stroke();

  doc.image(
    filePath5,
    x5,
    y5,
    { width: width, height: height },
    {
      align: "center",
      valign: "center",
    }
  );

  doc.rect(x5, y5, width, height).strokeColor('#b32222').lineWidth(4).stroke();

  doc.image(
    filePath6,
    x6,
    y6,
    { width: width, height: height },
    {
      align: "center",
      valign: "center",
    }
  );

  doc.rect(x6, y6, width, height).strokeColor('#b32222').lineWidth(4).stroke();

  // Finalizar el PDF y enviar la respuesta

  doc.end();

  



});

module.exports = router;
