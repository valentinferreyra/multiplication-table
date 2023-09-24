const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 1, hasta = 10, listar = false) => {
    try {
        let salida = '';
        let consola = '';
        for(let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i} \n`);
            consola += (`${base} x ${colors.italic(i).blue} = ${colors.bold(base * i)} \n`);
        }
        
        if (listar) {
            console.log('===================='.red);
            console.log(`    Tabla del ${colors.blue(base)}:`.bold);
            console.log('===================='.red);
            console.log(consola);   
        }
        fs.writeFileSync(`./output/tabla-${ base }.txt`, salida);
        return (`tabla-${ base }.txt`);
    } catch(err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}