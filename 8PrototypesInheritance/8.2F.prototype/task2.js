function User(name) {
    this.name = name;
}

let user = new User('Andrei');
let userTwo = new user.constructor('Fedor');

alert(userTwo.name);