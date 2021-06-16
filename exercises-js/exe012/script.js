// Tendo como dados de entrada a altura e o sexo de uma pessoa (M masculino e F feminino), construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// - para homens: (72.7*h)-58
// - para mulheres: (62.1*h)-44.7

let sex = 'f'
let height = 1.75

function idealWeight(){
    if (sex === 'f'){
        return ((62.1 * height) - 44.7)
    } else {
        return ((72.7 * height) - 58)
    }
}

console.log(idealWeight())
