function setDailyRhythm(wakeUpTime, bedTime) {
    const wakeUpMessage = () => console.log('Доброе утро, Вася!');
    const goSleepMessage = () => console.log('Спокойной ночи, Вася!');  

    let wakeUp = setAlarm(wakeUpTime, wakeUpMessage);
    let goSleep = setAlarm(bedTime, goSleepMessage);

    const checkWakeUpTime = () => wakeUp(new Date());
    const checkGoSleepTime = () => goSleep(new Date());

    setInterval(checkWakeUpTime, 1000);
    setInterval(checkGoSleepTime, 1000);

    // setInterval(() => wakeUp(new Date()), 1000); короткий вариант
}

function setAlarm(time, callback) {
    return function (systemTime) {
        systemTime = systemTime.toString();

        let shortTime = () => {return systemTime.slice(16, 21)};
        // let shortTime = systemTime.toString().slice(16, 21)}; короткий вариант
        
        if (shortTime() === time) {
            callback();
        }
    }
}
