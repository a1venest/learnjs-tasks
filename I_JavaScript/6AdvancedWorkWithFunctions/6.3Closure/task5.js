function inBetween(a, b) {
    return function(k) {
        return k >= a && k <= b;
    }
}

function inArray(arr, arr2) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] == arr2[j]) {
                newArr.push(arr[i]);
            }
        }
    }
    return alert(newArr);
}
/*
function inArray(arr) {
    return function(x) {
    return arr.includes(x);
};
}*/
let arr = [1, 2, 3, 4, 5, 6, 7];

let arr2 = [1, 2, 10];

alert(arr.filter(inBetween(3, 6)));
alert(arr.filter(inArray(arr, arr2)));