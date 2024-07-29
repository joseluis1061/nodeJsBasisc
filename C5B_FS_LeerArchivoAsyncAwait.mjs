/**
 * Leer archivo de manera asincrona 
 */
import { readFile } from 'node:fs/promises';

const data = await readFile('./documento.txt', 'utf-8');
console.log(data);
