/**
 * Leer archivo de manera asincrona 
 */
const { error } = require('node:console');
const fs = require('node:fs/promises');
fs.readFile('./README.txt', 'utf-8')
    .then(readme => {
        console.log(readme);
        return readme;
    })
    .catch(error => {
        console.log("Error: ", error);
        return error;
    })

