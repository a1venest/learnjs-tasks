let age = prompt("Сколько вам лет?", "");

if (!(age >= 14 && age <= 90)) {
    alert("True");
} else {
    alert("False");
}

if (age < 14 || age < 90) {
    alert("True");
} else {
    alert("False");
}