/**
 * Leer archivo de manera asincrona
 */
const fs = require('node:fs');
// const readme = fs.readFileSync('./README.txt', 'utf8'); // Indicamos tipo de carcteres asincrona
console.log('---------------TEXTO 1---------------------')
fs.readFile('./README.txt', 'utf8',(error, resolve)=> {
    if(error){
        console.log("Error al leer archivo Readme:", error);
        return;
    }
    console.log("----- Readme -----");
    console.log(resolve);
}); 
console.log('---------------TEXTO 2---------------------')
fs.readFile('./documento.txt', 'utf8',(error, resolve)=> {
    if(error){
        console.log("Error al leer archivo Documento:", error);
        return;
    }
    console.log("----- Documento -----");
    console.log( resolve);
    return 
}); 