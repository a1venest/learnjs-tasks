function random(min, max) {
    return min + Math.random() * (max - min);
  };

let numberOne = +prompt('Введите минимальное число:');
let numberTwo = +prompt('Введите максимальное число:');

alert(random(numberOne,numberTwo));