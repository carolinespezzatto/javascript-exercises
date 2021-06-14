function reverse(num) {
    let ret = new Array;
    for(var i = num.length-1; i >= 0; i--) {
        ret.push(num[i]);
    }
    return ret;
}

let a = [1,22,3,44,5,66]
let b = reverse(a);

console.log(b);