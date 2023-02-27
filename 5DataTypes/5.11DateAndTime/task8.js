function formatDate(date) {
    let dateNow = new Date();
    let timer = dateNow - date;
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + (date.getMonth() + 1);
    let year = date.getFullYear();
    if (timer < 1000)
        return alert("Прямо сейчас");

    else if (timer < (60 * 1000))
        return alert(`${Math.round(timer/1000)} секунд назад`);

    else if (timer < (60 * 60 * 1000))
        return alert(`${Math.round(timer/(60*1000))} минут назад`);

    else return alert(`${day}.${month}.${year} ${hours}:${minutes}`);

}

let date = new Date(Date.parse("2023-02-27T13:38"));

formatDate(date);