// let a = [0, 3, 99, 44, -1] 
// let b = [4, 6, 9, 10, -349] 
// let c = [1, 1, 1, 99, 37]

// function getTogether(){
//     let d = a.concat(b,c)
//     return(d)
// }
// console.log(getTogether())

let a = [0, 3, 99, 44, -1] 
let b = [4, 6, 9, 10, -349] 
let c = [1, 1, 1, 99, 37]

function getTogether(){
    let d = a.concat(b,c)
    d.sort((a, b) => b -a)
    return(d)
}
console.log(getTogether())




