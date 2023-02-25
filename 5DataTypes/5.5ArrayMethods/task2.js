function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let array = [6,5,4,3,2,1];
let firstNumber = +prompt('Введите первое число:',0);
let secondNumber = +prompt('Введите второе число:',0); 

let filtered = filterRange(array, firstNumber, secondNumber);

alert( filtered );
alert( arr );