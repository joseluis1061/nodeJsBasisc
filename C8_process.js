/**
 * Process me da acceso a los datos del proceso actual
 * Puedes manipular el cierre del mismo
 * Ejecutar una acción si se produce un error 
 * Entregar datos mediante argumentos al proceso que se esta ejecutando
*/

//1. Argumentos de entrada
console.log(process.argv);

// Path de ubicación
console.log("Current work directory: ", process.cwd());

// Salir del proceso 0 salida normal 1 salida por algun error
process.exit(1);

// Escuchar eventos del proceso y ejecutar una acción. Pej. La salida del proceso
process.on('exit', () => {
    console.log("Se cerro el proceso");
});
