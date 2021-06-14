function odd() {
    for (let num = 0; num < 200; num++) {
        if ((num % 2) !== 0 && (num < 100)) {
            console.log(num);
        }
    }
}
console.log(odd());