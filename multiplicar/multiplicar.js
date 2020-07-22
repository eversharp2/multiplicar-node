const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        console.log('===================='.green);
        console.log(`Tabla de ${base}`.green);
        console.log('===================='.green);
        for (let i = 0; i <= limite; i++) {

            console.log(`${base} por ${i} es igual a: ` + base * i);
        }





    })
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += base + ' por ' + i + ' es igual a: ' + base * i + `\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
            console.log(`El archivo  ha sido grabado`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}