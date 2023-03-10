function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter();

alert(counter());
alert(counter());

counter.set(10);

alert(counter());

counter.decrease();

alert(counter());