function biggerNumber(num) {
    let biggerNumberNow = num[0]

    for(let i = 1; i < num.length; i++ ) {
        if(num[i] > biggerNumberNow) {
            biggerNumberNow = num[i]
        }
    }
    return biggerNumberNow
}
console.log(biggerNumber([7,11,19,4,27,9,15]))