let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }

    alert(list.value);
}

function printReverseListTwo(list) {
    let arr = [];
    let temp = list;

    while (temp) {
        arr.push(temp.value);
        temp = temp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}

printReverseList(list);
printReverseListTwo(list);