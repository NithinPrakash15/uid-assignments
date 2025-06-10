let temp = prompt("Enter the temperature value:");
temp = parseFloat(temp);
let category;

if (temp < 0) {
    category = "Freezing";
} else if (temp >= 0 && temp <= 15) {
    category = "Cold";
} else if (temp >= 16 && temp <= 30) {
    category = "Moderate";
} else {
    category = "Hot";
}

console.log(`The temperature is ${category}`);
alert(`The temperature is ${category}`);