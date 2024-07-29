/**
 * Leer archivo con promesas transformando de callBack a promise
 */
const fs = require('node:fs');
const { promisify } = require('node:util');
const readFilePromisify = promisify(fs.readFile);

readFilePromisify('./documento.txt', 'utf-8')
    .then(readme => {
        console.log(readme);
        return readme;
    })
    .catch(error => {
        console.log("Error: ", error);
        return error;
    })

