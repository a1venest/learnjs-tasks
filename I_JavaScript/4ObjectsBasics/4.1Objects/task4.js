let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function Sum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum = sum += obj[key];
    }
    return sum;
}

alert(Sum(salaries));