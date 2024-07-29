/**
 * Leer archivo de manera asincrona paralela
 */
import { readFile } from 'node:fs/promises';

Promise.all([
    await readFile('documento.txt', 'utf-8'),
    await readFile('documento2.txt', 'utf-8')
]).then((doc1, doc2)=> {
    console.log(doc1);
    console.log(doc2);
})
