
const fs = require('fs');


console.time("tiempo de respuesta");


// for(let i=0; i<= 10; i++) {
//   fs.readFileSync('archivo.txt', 'utf8');
// }



for(let i=0; i<= 10; i++) {
   
  const streamEscritura = fs.createReadStream("archivo.txt", {
    encoding: "utf-8"
  });

}

/*Ahora ¿qué es lo que ocurre acá? Lo que ocurre con "stream" es que vamos a leer progresivamente un archivo.
Eso significa que vamos a leer solo partes en cuanto se encuentren disponibles de este archivo y las vamos a 
ir acumulando dentro del sistema. En el caso de la lecturafadicional sincrónica o asincrónica, vamos a esperar 
hasta que el archivo se termine de leer y vamos a ejecutar el siguiente proceso. Así que, en el caso de este bucle 
que se ejecuta diez veces, se va a ejecutar únicamente después de que ya leímos esos En este caso, en este bucle 
vamos a ejecutar todos los comandos al mismo tiempo y se van a estar leyendo dentro del sistema. Los "streams" nos 
van a permitir trabajar en diferentes hilos de manera asincrónica, y lo más importante es que no vamos a bloquear el 
tiempo de ejecución de nuestras aplicaciones. Así que los "streams" nos van a ayudar en todo momento a mejorar el rendimiento 
dramáticamente de nuestras aplicaciones en Node.*/



console.timeEnd("tiempo de respuesta");