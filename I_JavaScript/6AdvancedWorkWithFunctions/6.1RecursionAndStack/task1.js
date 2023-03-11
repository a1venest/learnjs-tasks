function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumToRec(n) {
    if (n == 1) return 1;
    return n + sumToRec(n - 1);
}

function sumToForm(n) {
    return (n * (n + 1)) / 2;
}


const number = +prompt("Введите число:");

alert(sumToForm(number));
alert(sumToRec(number));
alert(sumTo(number));