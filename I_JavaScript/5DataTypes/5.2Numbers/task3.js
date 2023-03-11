function readNumber(){
    let number = +prompt("Введите число:")
    if(Number.isFinite(number)){
        return number;
    }
    else if(number===null||number==='') return null;
    else return readNumber();
}

alert(readNumber());