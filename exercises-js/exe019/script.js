// Faça um algoritmo que leia o tempo de duração de um evento em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos. 


var duration = 203045

var hours = parseInt(duration/3600)
console.log(hours)
var leftovers = (duration-(hours*3600))

var minutes = parseInt(leftovers/60)
console.log(minutes)
var leftovers = (duration-((minutes*60) + (hours*3600)))

console.log(leftovers)