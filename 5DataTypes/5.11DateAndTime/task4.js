let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {

    return new Date(date.getTime() - (days * 24 * 3600 * 1000)).getDate();
}

alert(getDateAgo(date, 3));