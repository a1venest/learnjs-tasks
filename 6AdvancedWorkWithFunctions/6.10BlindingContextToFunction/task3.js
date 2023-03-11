function sayHi() {
    alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

alert(bound.test); // передано name:"Вася", нет свойства тест у переданного аргумента. undefined