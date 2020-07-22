const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}


const argv = require('yargs')

.command('listar', 'Imprime en la consola la tabla de multiplcar', opts)
    .command('crear', 'Genera un archivo conS la tabla de multiplcar', opts)
    .help()
    .argv

module.exports = {
    argv
}