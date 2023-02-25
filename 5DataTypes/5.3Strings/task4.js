function extractCurrencyValue(str){
    return parseFloat(str);
}

let money = prompt("Введите необходимое значение денежных средств и валюту:");

alert(extractCurrencyValue(money));