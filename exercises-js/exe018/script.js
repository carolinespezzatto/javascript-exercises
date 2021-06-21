// Faça um algoritmo que leia as 3 moneyBills de um aluno e calcule a média final deste aluno. Considerar que a média é ponderada e que o peso das moneyBills é: 2,3 e 5, respectivamente.

var n1 = 7
var n2 = 9
var n3 = 6

function calculateAverage(){
    return (((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10)
}
console.log(calculateAverage())