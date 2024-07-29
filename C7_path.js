const path = require('node:path');
// Tipo de separador en el SO
console.log("Separador del SO: ", path.sep);

// Unir rutas con path join
const nuevaRuta = path.join('D:',"archivos", "datos");
console.log("Nueva ruta: ", nuevaRuta);

// Recuperar el nombre del archivo con extensión ignorando la ruta
const baseName = path.basename('./cjs/calculator.mjs');
console.log("Nombre con extensión: ", baseName);

// Recuperar solo nombre del archivo sin extensión
const onlyBaseName = path.basename('./cjs/calculator.mjs', '.mjs');
console.log("Nombre sin extensión: ", onlyBaseName);

// Recuperar nombre de la extensión
const extension = path.extname('./cjs/calculator.mjs');
console.log("Extensión: ", extension);