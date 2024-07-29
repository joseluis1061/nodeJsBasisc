/**
 * Leer archivo de manera asincrona 
 */
const fs = require('node:fs/promises');
let document;
(
    async ()=> {
        document = await fs.readFile('./documento.txt', 'utf-8');
        console.log(document);
    }
)()