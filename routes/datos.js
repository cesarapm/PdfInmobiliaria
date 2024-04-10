const { Router } = require("express");
const router = new Router();

const request = require("request");

const fs = require("fs");
const imgdole = require("../dow").dowload;

router.get("/", async (req, res) => {
  let imagePreview =
    "https://previews.123rf.com/images/dxinerz/dxinerz1602/dxinerz160203664/52406066-insertar-imagen-el-color-del-icono-del-vector-image-can-tambi%C3%A9n-ser-utilizado-para-la-edici%C3%B3n-de.jpg";

  if (!req.query.param1) {
    const nomfile = "./umpolad/img1.PNG";

    imgdole(imagePreview, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  } else {
    const nomfile = "./umpolad/img1.PNG";

    imgdole(req.query.param1, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  }
  if (!req.query.param2) {
    const nomfile = "./umpolad/img2.PNG";

    imgdole(imagePreview, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  } else {
    const nomfile = "./umpolad/img2.PNG";

    imgdole(req.query.param2, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  }

  if (!req.query.param3) {
    const nomfile = "./umpolad/img3.PNG";

    imgdole(imagePreview, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  } else {
    const nomfile = "./umpolad/img3.PNG";

    imgdole(req.query.param3, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  }
  if (!req.query.param4) {
    const nomfile = "./umpolad/img4.PNG";

    imgdole(imagePreview, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  } else {
    const nomfile = "./umpolad/img4.PNG";

    imgdole(req.query.param4, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  }
  if (!req.query.param5) {
    const nomfile = "./umpolad/img5.PNG";

    imgdole(imagePreview, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  } else {
    const nomfile = "./umpolad/img5.PNG";

    imgdole(req.query.param5, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  }
  if (!req.query.param6) {
    const nomfile = "./umpolad/img6.PNG";

    imgdole(imagePreview, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  } else {
    const nomfile = "./umpolad/img6.PNG";

    imgdole(req.query.param6, nomfile, function () {
      console.log("img" + nomfile + "descargado");
    });
  }

  res.send("toda");
});

module.exports = router;
