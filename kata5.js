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