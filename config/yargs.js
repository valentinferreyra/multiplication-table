const argv = require('yargs')
            .options({
                'b': {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla de multiplicar'
                },
                'l': {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Indica si desea mostrar la tabla en la terminal'
                },
                'h': {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta que numero se desea multiplicar la base'
                }
            })
            .check( (argv, options) => {
                if(isNaN(argv.b)) {
                    throw 'La base debe ser un número'
                }
                if(isNaN(argv.h)) {
                    throw 'El límite debe ser un número'
                }
                return true
            } )
            .argv;

module.exports = argv;