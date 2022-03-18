function calculosTriangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3 && lado3 == lado1){
        return 'Equilátero'
    }else if(lado1 == lado2 && lado2 != lado3) {
        return 'Isósceles'
    }else {
        return 'Escaleno'
    }
}

console.log(calculosTriangulo(2, 2, 2))
console.log(calculosTriangulo(2, 2, 3))
console.log(calculosTriangulo(1, 2, 3))