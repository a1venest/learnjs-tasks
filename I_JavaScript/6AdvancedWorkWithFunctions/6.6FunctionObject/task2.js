function sum(a) {

    let currentSum = a;

    function func(b) {
        currentSum += b;
        return func;
    }

    func.toString = function() {
        return currentSum;
    };

    return func;
}

sum(1)(2);
sum(1)(2)(3);
sum(5)(-1)(2);
sum(6)(-1)(-2)(-3);
sum(0)(1)(2)(3)(4)(5);