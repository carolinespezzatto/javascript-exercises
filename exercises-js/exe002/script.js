function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let array = []
for (let i = 0 ; i < 10 ; i++){
  array.push(getRandom(1 , 100))
}
function higherNumber (array) {
  return Math.max.apply(null, array)
}

console.log(array)
console.log(higherNumber(array))