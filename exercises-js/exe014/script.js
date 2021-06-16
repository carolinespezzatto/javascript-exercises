// Escrever um algoritmo que lê:
// - a percentagem do IPI a ser acrescido no value das peças
// - o código da peça 1, value unitário da peça 1, quantidade de peças 1
// - o código da peça 2, value unitário da peça 2, quantidade de peças 2
// O algoritmo deve calcular o value total a ser pago e apresentar o resultado.
// Fórmula : (value1*quant1 + value2*quant2)*(IPI/100 + 1)

var codeOne = 123
var valueOne = 15.00
var amountOne = 10
var codeTwo = 124
var valueTwo = 10.00
var amountTwo = 20
var ipi = 3

function pay() {
    return (((valueOne * amountOne) + (valueTwo * amountTwo)) * (ipi/100 + 1))
}

console.log(pay())