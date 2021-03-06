const fs = require('fs'); // necesitado para guardar/cargar unQify
const unqmod = require('./unqfy'); // importamos el modulo unQify
const CommandInvoker = require('./Command/CommandInvoker'); // importo invoker
const unqInstance = new unqmod.UnQify();


/*
 En esta funcion deberán interpretar los argumentos pasado por linea de comandos
 e implementar los diferentes comandos.

  Se deberán implementar los comandos:
    - Alta y baja de Artista
    - Alta y Baja de Albums
    - Alta y Baja de tracks

    - Listar todos los Artistas
    - Listar todos los albumes de un artista
    - Listar todos los tracks de un album

    - Busqueda de canciones intepretadas por un determinado artista
    - Busqueda de canciones por genero

    - Dado un string, imprimmir todas las entidades (artistas, albums, tracks, playlists) que coincidan parcialmente
    con el string pasado.

    - Dada un nombre de playlist, una lista de generos y una duración máxima, crear una playlist que contenga
    tracks que tengan canciones con esos generos y que tenga como duración máxima la pasada por parámetro.

  La implementacion de los comandos deberá ser de la forma:
   1. Obtener argumentos de linea de comando
   2. Obtener instancia de unQify (getunQify)
   3. Ejecutar el comando correspondiente en unQify
   4. Guardar el estado de unQify (saveunQify)

*/

async function main() {
  
  const unQify = unqInstance.getUnQify();

  const nameFunction = process.argv[2];
  const args = process.argv.splice(3);

  const operation = new CommandInvoker();

  try {
    const command = operation.getCommand(nameFunction);
    await command.invoke(unQify, args);
    unQify.save()

  } catch (error){
    console.log(error);
  }
}

main();
