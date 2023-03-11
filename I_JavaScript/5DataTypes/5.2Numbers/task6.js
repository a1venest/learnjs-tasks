function randomInteger(min, max) {
    let random = (min - 0.5) + Math.random() * ((max + 1) - min);
    return Math.round(random);
  };

let numberOne = +prompt('Введите минимальное число:');
let numberTwo = +prompt('Введите максимальное число:');

alert(randomInteger(numberOne,numberTwo));
alert(randomInteger(numberOne,numberTwo));
alert(randomInteger(numberOne,numberTwo));
alert(randomInteger(numberOne,numberTwo));
alert(randomInteger(numberOne,numberTwo));
alert(randomInteger(numberOne,numberTwo));