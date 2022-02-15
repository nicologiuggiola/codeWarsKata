

function isNarcissistic(number){
    let stringNumber = number + "";
    let pow = stringNumber.length;
    let sum = 0;
    for (let i = 0; i < stringNumber.length; i++) {
        const char = stringNumber[i];
        const intNumber = parseInt(char);
        const result = Math.pow(intNumber, pow);
        sum += result;
    }
    return sum === number;
}

function isNarcissistic2(value){
    const string = value.toString();
    const len = string.length;
    const result = [];
    for (let i = 0; i < string.length; i++) {
        const digit = string[i];
        result.push(Math.pow(digit, len));    
    }
    const finalResult = result.reduce((a,b) => a+b, 0);
    return finalResult === value;
}


function isNarcissistic3(number){
    return number === [...(number + "")].reduce((p,c,i,a) => p + Math.pow(c, a.length), 0)
}


console.log("Mi aspetto true, ho ottenuto: ",isNarcissistic3(153))
console.log("Mi aspetto false, ho ottenuto: ", isNarcissistic3(151))
console.log("Mi aspetto true, ho ottenuto: ", isNarcissistic3(370))
console.log("Mi aspetto false, ho ottenuto: ", isNarcissistic3(1938))
console.log("Mi aspetto true, ho ottenuto: ", isNarcissistic3(407))