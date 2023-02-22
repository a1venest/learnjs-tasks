describe("Возводит x в степень n", function() {
    let x = 5;
    let result = x;

    it(`${x} в степени 1 будет ${x**1}`, function() {
        assert.equal(pow(x, 1), result);
    });
    it(`${x} в степени 2 будет ${x**2}`, function() {
        assert.equal(pow(x, 2), result);
    });
    it(`${x} в степени 3 будет ${x**3}`, function() {
        assert.equal(pow(x, 3), result);
    });
});