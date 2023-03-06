const menorValor = 1
const maiorValor = 1000

const secretNumber = Math.round(Math.random() * maiorValor + 1)

const elementMaiorValor = document.getElementById("maior-valor")
elementMaiorValor.innerHTML = maiorValor
const elementMenorValor = document.getElementById("menor-valor")
elementMenorValor.innerHTML = menorValor


console.log(secretNumber)