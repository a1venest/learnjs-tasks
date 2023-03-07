function printList(list) {
    alert(list.value);
    if (list.next) printList(list.next);
}

function printListTwo(list) {
    let temp = list;

    while (temp) {
        alert(temp.value);
        temp = temp.next;
    }

}

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

printList(list);
printListTwo(list);