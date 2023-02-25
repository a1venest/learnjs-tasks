function checkSpam(str){
    str = str.toLowerCase();
    if(str.includes("viagra")){
        return true;
    }
    else if(str.includes("xxx")){
        return true;
    }
    else return false;
}

let userString = prompt("Введите сообщение:");

alert(checkSpam(userString));