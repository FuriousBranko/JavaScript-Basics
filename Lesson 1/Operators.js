// Arithmetic Operators: These are used to perform mathematical operations.

// Addition (+): Adds two numbers.


let sum = 5 + 3;  // 8
//Subtraction (-): Subtracts the right-hand operand from the left-hand operand.


let difference = 5 - 3;  // 2
//Multiplication (*): Multiplies two numbers.


let product = 5 * 3;  // 15
//Division (/): Divides the left-hand operand by the right-hand operand.


let quotient = 8 / 2;  // 4
//Modulus (%): Returns the remainder of a division.


let remainder = 7 % 3;  // 1
//Increment (++): Increases a value by 1.


let count = 5;
count++;  // 6
// Decrement (--): Decreases a value by 1.


let count = 5;
count--;  // 4



// Comparison Operators: These are used to compare two values.

// Equal to (==): Checks if two values are equal.


let isEqual = (5 == "5");  // true
//Strictly equal (===): Checks if two values are equal and of the same type.


let isStrictlyEqual = (5 === "5");  // false
//Not equal (!=): Checks if two values are not equal.


let isNotEqual = (5 != "6");  // true
//Strictly not equal (!==): Checks if two values are not equal or not of the same type.


let isStrictlyNotEqual = (5 !== "5");  // true
//Greater than (>), Less than (<), Greater than or equal to (>=), Less than or equal to (<=):


let isGreater = (5 > 3);  // true

let accountBalance = 500;
let canWithdraw = accountBalance >= 100;  // true if withdrawal is possible



//Logical Operators: These are used to determine the logic between variables or values.

// AND (&&): Returns true if both operands are true.


let result = (5 > 3 && 6 > 4);  // true
//OR (||): Returns true if at least one operand is true.


let result = (5 < 3 || 6 > 4);  // true
//NOT (!): Returns the inverse of the operand.


let result = !(5 > 3);  // false

let hasFunds = accountBalance > 0;
let hasOverdraftProtection = true;
let canPurchase = hasFunds || hasOverdraftProtection;



//Assignment Operators: These are used to assign values to variables.

// Assign (=):


let x = 5;
//Add and assign (+=), Subtract and assign (-=), Multiply and assign (*=), Divide and assign (/=):


x += 3;  // x = x + 3

let savings = 1000;
savings += 200;  // Deposit $200
savings -= 50;   // Withdraw $50



//Ternary Operator: A shorthand way of writing an if-else statement.


let loanAmount = 5000;
let risk = (loanAmount > 10000) ? "High" : "Low";
