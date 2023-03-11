function truncate(str, maxLength){
    if(str.Length <= maxLength){
        return str;
    }
    else{
       return str.substr(0, maxLength - 1) + '…';
    }
}

let userString = prompt('Введите строку:');
let userStringLength = +prompt('Введите размер строки:');

alert(truncate(userString, userStringLength));