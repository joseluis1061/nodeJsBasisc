const fs = require('node:fs');
const readme = fs.statSync('./README.txt');
console.log("----- Datos de un archivo -----");
console.log("Es un archivo", readme.isFile());
console.log("Es un directorio", readme.isDirectory());
console.log("Tamaño", readme.size);
console.log("Es enlace simbolico", readme.isSymbolicLink());
console.log("----- --------------------------- -----");