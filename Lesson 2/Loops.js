// Loops: These allow actions to be repeated multiple times.


// for Loop: Repeats a block of code a specified number of times.
let investments = [100, 200, 150, 300];
let totalInvestment = 0;
for (let i = 0; i < investments.length; i++) {
    totalInvestment += investments[i];
}
console.log(`Total investments: $${totalInvestment}`);


// while Loop: Repeats a block of code as long as a specified condition is true.
let savingsGoal = 5000;
let currentSavings = 1000;
let months = 0;
while (currentSavings < savingsGoal) {
    currentSavings += 500;  // assume saving $500 each month
    months++;
}
console.log(`It will take ${months} months to reach your savings goal.`);


// do...while Loop: Similar to the while loop, but the block of code is executed at least once before the condition is tested.
let numberOfTrades = 0;
do {
    // execute a trade
    numberOfTrades++;
} while (numberOfTrades < 5);


// Loops:
// Calculating compound interest over multiple periods.
// Evaluating a portfolio's performance over several years.
// Iterating through a list of transactions to determine total expenses.