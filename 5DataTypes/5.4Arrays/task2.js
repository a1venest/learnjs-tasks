let styles = ["Джаз", "Блюз"];
alert(styles);

styles.push("Рок-н-Ролл");
alert(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles);

alert(styles.shift[0]);
alert(styles);

styles.unshift("Рэп", "Регги");
alert(styles);