function printNumbers(from, to) {
    let current = from;

    let timerID = setInterval(function() {
        alert(current);
        if (current == to) clearInterval(timerID);

        current++;
    }, 1000);
}

printNumbers(1, 10);

function printNumbersRec(from, to) {
    let current = from;

    setTimeout(function start() {
        alert(current);
        if (current < to) setTimeout(start, 1000);
        current++;
    }, 1000)
}

printNumbersRec(1, 10);