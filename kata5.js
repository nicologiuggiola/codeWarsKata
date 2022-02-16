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

//console.log(divisors(997));

function getSlope(p1, p2) {
    return p1[0] === p2[0] ? null : (p2[1] - p1[1])/(p2[0] - p1[0])
}

//Game Hit the target - 2nd part
