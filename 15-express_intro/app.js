const express = require("express");
const app = express();
const puerto = 3000;

app.get('/' , (request, respuesta)=> {
    respuesta.send('Hola Mundo')
})


app.listen( puerto , ()=>{ 
    console.log(`escuchando el puerto ${puerto}!`)
})

//para generar un serviror en consola necesita la libreria express generator de forma global
//npm i -g express-generator
//crear un proyecto -> express --view-pug myapp
// donde:
//express: comando disponible en todo el sistema
// --view-pug: motor de plantillas
// myapp: nombre de la app