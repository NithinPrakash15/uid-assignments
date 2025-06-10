function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

let num = prompt("Enter a number to find its factorial:");
num = parseInt(num);
if (isNaN(num) || num < 0) {
    alert("Please enter a valid non-negative number");
} else {
    let result = factorial(num);
    console.log(`Factorial of ${num} is ${result}`);
    alert(`Factorial of ${num} is ${result}`);
}