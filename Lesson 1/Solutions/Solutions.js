//1. Declare three variables: savings, loanAmount, and interestRate. Print their values.
let savings = 1000;
let loanAmount = 5000;
let interestRate = 0.05;
console.log(savings, loanAmount, interestRate);



//2. Calculate the interest on a loan and store it in a variable. Print the result.

let interest = loanAmount * interestRate;
console.log(interest);



//3. Declare a variable investment and calculate its value after a year given an interestRate. Print the result.

let investment = 2000;
investment += investment * interestRate;
console.log(investment);