// multer es paquete externo de node, permite procesar el archivo
const multer = require("multer");
//extensión que define el tipo de archivo que nos llega
const extension = require("../classes/MimeTypes");

var path = require("path");


var storage = multer.diskStorage({  //guarda información
  destination: function (req, file, cb) { //destino para guardar el archivo
    cb(null, path.join(__dirname, "../", "public/done"));
  },
  filename: function (req, file, cb) {
    const ext = new extension();
    cb(
      null,
      //define el nombre del archivo con la extención que corresponde
      file.fieldname + "-" + Date.now() + ext.getExtension(file.mimetype) 
    );
  }
});

const upload = multer({
  limits: { //tamaño maximo del archivo
    fileSize: 4 * 1024 * 1024
  },
  dest: path.join(__dirname, "../", "public"), //ruta de destino
  storage: storage  //lugar de guardado
});

module.exports = upload;
