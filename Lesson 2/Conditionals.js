// Conditional Statements: These allow actions to be taken based on conditions.


// if Statement: Executes a block of code if a specified condition is true.
let balance = 1000;
if (balance > 0) {
    console.log("You have funds in your account.");
}


// if...else Statement: Executes one block of code if the condition is true, and another block if the condition is false.
if (balance > 0) {
    console.log("You have funds in your account.");
} else {
    console.log("Your account is empty.");
}


// if...else if...else Statement: Used for multiple conditions.
let creditScore = 650;
if (creditScore >= 750) {
    console.log("You qualify for a premium loan rate.");
} else if (creditScore >= 650) {
    console.log("You qualify for a standard loan rate.");
} else {
    console.log("You need to improve your credit score for better rates.");
}


// switch Statement: Used to perform different actions based on different conditions.
let accountType = "savings";
switch (accountType) {
    case "checking":
        console.log("This is a checking account.");
        break;
    case "savings":
        console.log("This is a savings account.");
        break;
    default:
        console.log("Unknown account type.");
}


// Conditional Statements:
// Evaluating loan eligibility based on credit score.
// Determining investment strategies based on risk profiles.
// Assessing account fees based on account balance or type.