function getLastDayOfMonth(year, month) {
    let lastDay = new Date(year, (month + 1), 0);
    return lastDay.getDate();
}

alert(getLastDayOfMonth(2001, 2));