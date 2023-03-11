let date = new Date(2012, 0, 3);

function getWeekDay(date) {
    let weekDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return weekDay[date.getDay()];
}

alert(getWeekDay(date));