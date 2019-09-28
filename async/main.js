function setDailyRhythm(wakeUpTime, bedTime) {
    let wakeUp = setAlarm(wakeUpTime, wakeUpMessage);
    let goSleep = setAlarm(bedTime, goSleepMessage);

    setInterval(wakeUp, 1000);
    setInterval(goSleep, 1000);
}

function setAlarm(time, callback) {
    return function (sustemTime) {
        if (sustemTime === time) {
            callback();
        }
    }
}

const wakeUpMessage = () => console.log('Доброе утро, Вася!');
const goSleepMessage = () => console.log('Спокойной ночи, Вася!');

let sustemFullTime = new Date();

let sustemFullTimeHours = function() {
    if (sustemFullTime.getHours() < 10) {
        return ('0' + sustemFullTime.getHours())
    }
    else {
        return  sustemFullTime.getHours()
    }
}

let sustemFullTimeMinutes = function() {
    if (sustemFullTime.getMinutes() < 10) {
        return ('0' + sustemFullTime.getMinutes())
    }
    else {
        return  sustemFullTime.getMinutes()
    }
}

let sustemTime = sustemFullTimeHours() + ':' + sustemFullTimeMinutes();
