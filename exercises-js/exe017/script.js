// Faça um algoritmo que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias.

var age = 8245

var years = parseInt(age/365)
console.log(years)
var leftovers = (age-(years*365))

var months = parseInt(leftovers/30)
console.log(months)
leftovers = (age-((months*30) + (years*365)))

console.log(leftovers)