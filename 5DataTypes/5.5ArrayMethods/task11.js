let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr){
    let count = 0;
    let averageAge = 0;
    for(let i =0; i<arr.Length;i++){
        averageAge = averageAge + arr[i].age;
        count++;
    }
    return averageAge/count;
}
alert( getAverageAge(arr) );