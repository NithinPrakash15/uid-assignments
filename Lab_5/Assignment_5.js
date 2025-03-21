// 1. Pattern Printing
for (let i = 1; i <= 3; i++) {
    console.log('*'.repeat(i));
}

// 2. Factorial Calculation
const num = parseInt(prompt("Enter a number: "));
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
alert("Factorial: " + factorial(num));
console.log("Factorial: " + factorial(num));

// 3. Capitalize First Letter of Each Word
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords("hello world from javascript"));

// 4. Temperature Categorizer
const temp = parseFloat(prompt("Enter temperature: "));
if (temp < 0) alert("Freezing");
else if (temp <= 15) alert("Cold");
else if (temp <= 30) alert("Moderate");
else alert("Hot");

// 5. Days Left Until Next New Year
const today = new Date();
const nextNewYear = new Date(today.getFullYear() + 1, 0, 1);
const diff = Math.ceil((nextNewYear - today) / (1000 * 60 * 60 * 24));
console.log("Days until next New Year: ", diff);
console.log(`Today's date is : ${today.toLocaleDateString('en-GB')}`);

// 6. Find Index of 'locate'
const str = "Please locate where 'locate' occurs!";
console.log("Index of 'locate':", str.indexOf("locate"));

// 7. Random Number and Fibonacci Series
const randNum = Math.floor(Math.random() * 10) + 1;
console.log("Random Number: ", randNum);
function fibonacci(n) {
    let a = 0, b = 1;
    while (a < n) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}
fibonacci(randNum);

// 8. Find Highest Value in an Array
function maxInArray(arr) {
    return Math.max(...arr);
}
console.log("Max value: ", maxInArray([5, 12, 8, 130, 44]));

// 9. Book Object
const books = [
    { title: "My Experiments with Truth", author: "Mahatma Gandhi", cost: 300 },
    { title: "JavaScript Guide", author: "John Doe", cost: 600 },
    { title: "History of India", author: "Mahatma Gandhi", cost: 700 }
];

console.log("Books costing more than 500:");
books.filter(book => book.cost > 500).forEach(book => console.log(book.title));

console.log("Book by Mahatma Gandhi:");
books.filter(book => book.author === "Mahatma Gandhi").forEach(book => console.log(book.title));
