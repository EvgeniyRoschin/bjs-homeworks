function setDailyRhythm(wakeUpTime, bedTime) {
    const wakeUpMessage = () => console.log('Доброе утро, Вася!');
    const goSleepMessage = () => console.log('Спокойной ночи, Вася!');  

    // let wakeUp = setAlarm(wakeUpTime, wakeUpMessage);
    // let goSleep = setAlarm(bedTime, goSleepMessage);

    // const checkWakeUpTime = () => wakeUp();
    // const checkGoSleepTime = () => goSleep();

    const checkWakeUpTime = () => setAlarm(wakeUpTime, wakeUpMessage);
    const checkGoSleepTime = () => setAlarm(bedTime, goSleepMessage);

    setInterval(checkWakeUpTime(sustemTime), 1000);
    setInterval(checkGoSleepTime(sustemTime), 1000);
}

function setAlarm(time, callback) {
    return function (sustemTime) {
        if (sustemTime === time) {
            callback();
        }
    }
}

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
