function getSecondsToTomorrow() {
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    let nextDay = tomorrow - today;

    return Math.round(nextDay / 1000);
}

alert(getSecondsToTomorrow());