console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports) // This dentro do módulo está acenssando 'Module.Exports'

function logThis () {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // This dentro de uma função aponta pro 'Global'
}
logThis()