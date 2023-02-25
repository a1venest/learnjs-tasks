function ucFirst(str){
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

let userString = prompt("Введите строку с маленькой буквы:");

alert(ucFirst(userString));