let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeekMap();

readMessages.add(messages[1], new Date(2023, 1, 1));