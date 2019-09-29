function setDailyRhythm(wakeUpTime, bedTime) {
    const wakeUpMessage = () => console.log('Доброе утро, Вася!');
    const goSleepMessage = () => console.log('Спокойной ночи, Вася!');  

    let wakeUp = setAlarm(wakeUpTime, wakeUpMessage);
    let goSleep = setAlarm(bedTime, goSleepMessage);

    const checkWakeUpTime = () => wakeUp(new Date());
    const checkGoSleepTime = () => goSleep(new Date());

    setInterval(checkWakeUpTime(systemTime), 1000);
    setInterval(checkGoSleepTime(systemTime), 1000);
}

function setAlarm(time, callback) {
    return function (systemTime) {
        if (systemTime === time) {
            callback();
        }
    }
}

let systemFullTime = new Date();

let systemFullTimeHours = function() {
    if (systemFullTime.getHours() < 10) {
        return ('0' + systemFullTime.getHours())
    }
    else {
        return  systemFullTime.getHours()
    }
}

let systemFullTimeMinutes = function() {
    if (systemFullTime.getMinutes() < 10) {
        return ('0' + systemFullTime.getMinutes())
    }
    else {
        return  systemFullTime.getMinutes()
    }
}

let systemTime = systemFullTimeHours() + ':' + systemFullTimeMinutes();
