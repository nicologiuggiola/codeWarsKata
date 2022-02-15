
const scores = ["2:4", "3:2", "1:1", "3:5"]

const scores1 = ["4:4", "3:1", "1:1", "3:4", "2:4", "2:1"]


function points(games) {
    let score = 0;
    for (const game of games) {
        const numbers = game.split(":");
        const number1 = parseInt(numbers[0]);
        const number2 = parseInt(numbers[1]);
        if (number1 > number2) {
            score += 3;
        } else if (number1 === number2){
            score += 1;
        }
    }
    return score;
}

function points2(games) {
    let newArray = [];
    for (const game of games) {
        let x = game[0];
        let y = game[2];
        if (x > y) {
            newArray.push(3);
        } else if (x < y) {
            newArray.push(0);
        } else {
            newArray.push(1)
        }
    }
    return newArray.reduce((p , c) => p+c)
}

function points3(games) {
    return games.reduce((p, c) => (c[0] > c[2]) ?  (p + 3) : ((c[0] === c[2]) ? (p + 1) : p), 0)
}

function points4(games) {
    return games.reduce((sum, [x, ,y]) => sum + (x > y ? 3 : x == y), 0)
}


console.log("Mi aspetto 4, ho ottenuto: ", points3(scores));
console.log("Mi aspetto 8, ho ottenuto: ", points3(scores1));