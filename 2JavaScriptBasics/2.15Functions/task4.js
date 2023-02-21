function getMulti(x, n) {
    return alert(x ** n);
}

function getNumber(text) {
    return +prompt('Введите число ' + text + ':')
}

let numberOne = getNumber("x");
let numberTwo = getNumber("n");
getMulti(numberOne, numberTwo);