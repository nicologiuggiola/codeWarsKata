function divisors(n) {
    let array = []
    for (let i = 2; i < Infinity; i++) {
        if ( i + i <= n) {
            if (n%i === 0) {
                array.push(i);
            }
        } else{
            break;
        }
    }
    return array.length === 0 ? n + " is prime" : array;
}

console.log(divisors(997));
