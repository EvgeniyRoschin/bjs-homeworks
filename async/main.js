function setDailyRhythm(wakeUpTime, bedTime) {
    let sustemFullTime = new Date();
    let sustemTime = sustemFullTime.getHours() + ':' + sustemFullTime.getMinutes();
    
    function setAlarm(time, callback) {
        return function alarm(sustemTime) {
            if (sustemTime === time) {
                callback();
            }
        }
    }

    function wakeUp() {
        console.log('Доброе утро, Вася!');
    }

    function goSleep() {
        console.log('Спокойной ночи, Вася!');
    }

    setAlarm(wakeUpTime, wakeUp);
    setAlarm(bedTime, goSleep);
}

// setInterval( setDailyRhythm, 1000, '16:20',  '16:21');
