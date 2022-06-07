const fs = require("fs");

const streamLectura = fs.createReadStream( "./archivos/mi_archivo.txxxxxxt" , {encoding:'utf8'} );
                                            //archivo a leer                  codificación del archivo
streamLectura.on("open" , ()=>{     //metodo (.on) escucha los eventos del ciclo de vida de lectura del archivo
    console.log("abriendo archivo")
}).on("data" , ()=>{            //cuando llega un dato del archivo, cada vez que lelga un dato se lee de manera progresiva
    console.log("----")
}).on('close', ()=>{            //cuando se cierra el archivo
    console.log("archivo cerrado") 
}).on('error' , ()=>{           //cuando ocurre un error
     console.log("error en el archivo")
})
 