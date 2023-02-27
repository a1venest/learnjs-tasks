let date = new Date(2023, 1, 26);

function getLocalDay(date) {

    let dayOfWeek = date.getDay();
    if (date.getDay() == 0) dayOfWeek = 7;

    return dayOfWeek;

}

alert(getLocalDay(date));