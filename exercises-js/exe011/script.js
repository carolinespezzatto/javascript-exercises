function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let array = []
let sum = 0
for (let i = 0 ; i < 10000 ; i++){
  array.push(getRandom(1,10))
  sum = sum + array[i]
}

console.log(array)
console.log(sum)
