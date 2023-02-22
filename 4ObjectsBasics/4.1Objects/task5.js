let menu = {
    width: prompt("Введите число:"),
    height: prompt("Введите число:"),
    title: "My menu"
};

function multiplyNumeric(obj) {

    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;

        }

    }
}

multiplyNumeric(menu);