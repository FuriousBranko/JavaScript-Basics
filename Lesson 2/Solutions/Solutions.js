// 1. Write a loop that prints numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Use a switch statement to categorize risk profiles into "low", "medium", and "high" and print appropriate investment advice.

let riskProfile = "medium";

switch (riskProfile) {
    case "low":
        console.log("Invest in government bonds.");
        break;
    case "medium":
        console.log("Invest in a mix of bonds and equities.");
        break;
    case "high":
        console.log("Invest primarily in equities.");
        break;
    default:
        console.log("Consult a financial advisor for a tailored strategy.");
}

// 3. Given a variable balance, use an if-else statement to check if a user can afford a purchase of $100.

let balance = 150;

if (balance >= 100) {
    console.log("You can afford the purchase!");
} else {
    console.log("Insufficient funds for the purchase.");
}

// 4. Write a loop that calculates compound interest on a savings amount for 5 years.

let years = 5;

for (let i = 0; i < years; i++) {
    savings += savings * interestRate;
}
console.log(savings);