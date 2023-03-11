function sumInput(){
    let array = [];

    while(true){
        let value = prompt("Введите число:");
        if(value == null || "" || !isFinite(value)) break;
        array.push(+value);
    }


    let arraySum = 0;
    for( let i = 0; i< array.Length; i++){
        arraySum += array[i];
    }
    return arraySum;
}

alert(sumInput());