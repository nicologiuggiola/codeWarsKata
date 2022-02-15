

function doors(studentsAndDoors) {
    const doorStates = new Array(studentsAndDoors).fill(false);
    for (let i = 1; i <= studentsAndDoors; i++) {
        for (let j = i; j <= studentsAndDoors; j += i) {
            doorStates[j-1] = !doorStates[j-1]
        }
    }
    return doorStates.reduce((p, c) => c ? (p + 1) : p, 0)
}


function doors2(studentsAndDoors) {
    const doorStates = new Array(studentsAndDoors).fill(false);
    for (let i = 0; i < studentsAndDoors; i++) {
        let counter = i;
        while (counter < studentsAndDoors) {
            array[counter] = !array[counter];
            counter += (i+1)
        }
    }

    return doorStates.reduce((p, c) => c ? (p + 1) : p, 0)
}


function doors3(studentsAndDoors) {
    return Math.floor(Math.sqrt(studentsAndDoors));
}


console.log(doors2(5))