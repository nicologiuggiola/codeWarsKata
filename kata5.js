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

function getMiddle(string) {
    return string.length % 2 !== 0 ? string[Math.floor(string.length/2)] : string[(string.length/2)-1] + string[(string.length/2)];
}

function getMiddle2(string) {
    return [...string].reduce((p,c,i,a) => a.length % 2 === 0 ? string.substring((i/2),(i/2)+2) : a[Math.floor(i/2)]);
}

function getMiddle3(string) {
    return string.slice((string.length-1)/2, string.length/2+1);
}

console.log(getMiddle3("citao"));

function solution(n) {
    let array = []

    for (let i = 1; i < n; i++) {
        if (i%3 === 0 || i%5=== 0) {
            array.push(i);
        }
    }
    return array.length === 0 ? 0 : array.reduce((p,c) => p += c);
}

function solution2(number) {
    return number < 0 ? 0 : [...new Array(number).keys()].reduce((p,c) => (c%3 === 0 || c%5=== 0) ? p + c : p, 0);
}

console.log(solution(2));

function incrementString(string) {
    let lastChar = string[string.length-1];
    if (isNaN(lastChar)) {
        return string +1
    }
    let importantIndex;
    for (let i = string.length -2; i >= 0; i--){
        if (isNaN(string[i])) {
            importantIndex = i;
            break;
        }
    }
    const partialString = string.substring(0, importantIndex + 1);
    const stringNumber = parseInt(string.substring(importantIndex + 1));

    return partialString + (stringNumber + 1);
}

function incrementString2(string) {
    const regex = RegExp(/\d+$/);
    let searchResult = regex.exec(string);
    if (!searchResult) {
        return string + 1;
    } else {
        let numberFoundString = searchResult[0];
        const numberInt = parseInt(numberFoundString);
        return string.substring(0,string.length - numberFoundString.length) + (numberInt + 1);
    }
}

function incrementString3(string) {
    return !(/\d+$/).exec(string) ? string + 1 : string.substring(0,string.length - (/\d+$/).exec(string)[0].length) + (parseInt((/\d+$/).exec(string)) + 1);
}

console.log(incrementString3("montagna"));

// function findMissing(array){
//     return array.reduce((p,c) => c , 0)
// }

function findMissing(array) {
    let difArray = []
    for (let i = 0; i < array.length-1; i++) {
        difArray.push(array[i+1] - array[i])
        if(i > 0 && difArray[i] !== difArray[i-1]){
            break;
        }
    }
    return array[difArray.length-2] + difArray[difArray.length-1];
}

console.log("mi aspetto 7 e il risultato è: ",findMissing([1, 3, 5, 9, 11]));
console.log("mi aspetto -7 e il risultato è: ",findMissing([-1, -3, -5, -9, -11]));
console.log("mi aspetto 2 e il risultato è: ",findMissing([1,3,4]));
console.log("mi aspetto 41 e il risultato è: ",findMissing([ 14, 23, 32, 50, 59 ]));
console.log("mi aspetto -8 e il risultato è: ",findMissing([ 4, 1, -2, -5, -11, -14, -17, -20, -23, -26, -29, -32 ]));

function prime(n) {
    //let array = [...new Array(n+1).keys()]
    let result = [];
    for (let i = 1; i <= n; i++) {
      let counter = 2;
        for (let j = 2; j <= n; j++) {
            if (i % j !== 0) {
                counter++;
            }
        }
      if(counter === n){
        result.push(i);
      }
    }
    
    return result
}

function divisors2(n) {
    return [...new Array(n+1).keys()].filter((x) => x === 2 || x === 3 ||x !== 1 && x % x === 0 && x % 2 !== 0 && x % 3 !== 0 && x % x-1 !==0);
}

console.time("oldFunc");
console.log(prime(900));
console.timeEnd("oldFunc");

console.time("newFunc");
console.log(divisors2(997));
console.timeEnd("newFunc");

function prime2(n) {
    return [...new Array(n+1).keys()].filter(function(x){
        let counter = 2;
        for (let i = 2; i <= x; i++) {
            if (x % i !== 0) {
                counter++;
            }
        }
        if (counter === x && x !== 0) {
            return true;
        }
    })
}

console.time("oldFunc");
console.log(prime2(23));
console.timeEnd("oldFunc");

function mountainsOfHoyama(width){
    let startingNumber = 0;
    let actualWidth = width
    let array = [];
    while (actualWidth > 0) {
        let actualNumber = startingNumber
        for (let i = 0; i < actualWidth; i++) {
            
            if (i <= actualWidth/2) {
                actualNumber++
            } else {
                actualNumber--;
            }
            array.push(actualNumber);
        }
        actualWidth = actualWidth -2;
        startingNumber = startingNumber +2;
    }

    return array.reduce((p,c) => p+c)
}

function mountainsOfHoyama(width){
    return (width + 1)*(width**2 + 2 + width)/8;
}

console.log(mountainsOfHoyama(7));

function genPrime(number) {
    const primeNumbers = [2];
    let isPrime = true;
    for (let i = 3; i <= number; i++) {
        let numberToCheck = i;
        for (const prime of primeNumbers) {
            if (number % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(numberToCheck);
        }
    }
    return primeNumbers;
}

function genPrime2(number) {
    const range = Array.from({length: number -1}, (v, i) => i +2);
    const primeNumbers = [2];
    for (let i = 1; i < range.length; i++) {
        const numberToCheck = range[i];
        let isPrime = true;
        for (let j = 0; j < i; j++) {
            const controlNumber = range[j];
            if (numberToCheck % controlNumber === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(numberToCheck);
        }       
    }
    return primeNumbers
}

function genPrime3(number) {
    const array = Array.from({length: number -2}, (v, i) => i +3);
    return array.reduce((p, c) => p.some(e => c % e === 0) ? p : [...p, c],[2]); 
}

function genPrime4(number) {
    const array = Array.from({length: number -1}, (v, i) => i +2);
    return array.filter(c => !array.some(e => (c % e === 0 && c !== e)));
}

console.log(genPrime(3));
console.log(genPrime(5));
console.log(genPrime(11));

console.log(genPrime2(3));
console.log(genPrime2(2000));
console.log(genPrime3(2000));
console.log(genPrime4(2000));
