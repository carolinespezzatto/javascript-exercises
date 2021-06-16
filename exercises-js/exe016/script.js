// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.

var years = 60
var months = 3
var days = 10

function ageInDays() {
    return ((years * 365) + (months * 30) + (days))   
}

console.log(ageInDays())