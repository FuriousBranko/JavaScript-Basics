## Functions in JavaScript

### Introduction

Functions are blocks of reusable code that perform a specific task. Think of them as financial formulas or tools that you can use repeatedly to perform calculations or make decisions.

### Types of Functions
1. **Regular Functions**: The traditional way of defining functions.
   ```javascript
   function calculateInterest(principal, rate, time) {
       return principal * rate * time;
   }
   

2. **Arrow Functions**: A more concise way to write functions, introduced in ES6.
   ```javascript
   const calculateInterest = (principal, rate, time) => principal * rate * time;
   ```

3. **Function Expressions**: A way to define a function and assign it to a variable.
   ```javascript
   const compoundInterest = function(principal, rate, time) {
       return principal * Math.pow((1 + rate), time) - principal;
   };
   ```

4. **Recursion**: When a function calls itself. It's useful for tasks that can be defined in terms of repeating the same operation.
   ```javascript
   function factorial(n) {
       if (n === 0) {
           return 1;
       } else {
           return n * factorial(n - 1);
       }
   }
   ```

### Examples in a Financial Context

1. **Regular Functions**: 
   - Calculating loan payments.
   - Evaluating tax liabilities.

2. **Arrow Functions**: 
   - Quick calculations, like determining profit or loss percentages.

3. **Function Expressions**: 
   - Complex financial formulas that might be used in various parts of an application.

4. **Recursion**: 
   - Calculating compound interest over multiple periods.
   - Evaluating investment growth over time.




