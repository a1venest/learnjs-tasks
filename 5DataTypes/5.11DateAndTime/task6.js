function getSecondsToday() {

    let today = new Date;
    let secondsToday = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();

    return secondsToday;
}

alert(getSecondsToday());