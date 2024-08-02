const fs = require('node:fs/promises');
const path = process.argv[2] ?? "."; // Si hay argumento 2 define el path con ese argumento si no usa el .

// Lee el directorio
fs.readdir(path)
    .then(
        // Obtiene la lista
        listDir => {
            // Recorre e imprime la lista
            listDir.forEach((dir)=>{
                console.log(dir);
            })
        }
    )
    .catch(error => {
        console.log(error);
        return;
    });
