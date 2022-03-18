function formatarValor(valorDecimal){
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValor(0.1 + 0.2)