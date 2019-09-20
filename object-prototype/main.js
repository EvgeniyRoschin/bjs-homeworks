// Задача 3


function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();
    now = +now;

    let birthDay = new Date(birthday);
    birthDay = +birthDay;

    let diff = now - birthDay;

    let age = diff / 31557600000;

    let result = (age > 18);
   
    return result;
}

// Задача 1

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    let functionResult = 0;

    if (animal == undefined) {
        functionResult = null;
    } else {
        functionResult = sound;
    }

    return functionResult;
}

// Задание 2

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let averageMark = 0;
    let averageRounded = 0;

    for (let i = 0; i < marks.length; i++) {
        averageMark = averageMark + Number(marks[i]); 
    }

    averageMark = averageMark / marks.length;

    averageRounded = Math.round(averageMark);

    return averageRounded;
}