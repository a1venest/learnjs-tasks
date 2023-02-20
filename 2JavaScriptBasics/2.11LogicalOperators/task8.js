let name = prompt("Введите логин:", "");

if (name == "Админ") {
    let password = prompt("Введите пароль:");
    if (password == "Я главный") {
        alert("Здравствуйте!");
    } else if (password != "" && password != "Я главный" && password != null) {
        alert("Неверный пароль");
    } else {
        alert("Отменено")
    }

} else if (name != "" && name != "Админ" && name != null) {
    alert("Я вас не знаю.");
} else {
    alert("Отменено");
}