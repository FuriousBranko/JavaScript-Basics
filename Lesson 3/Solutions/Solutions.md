### Solutions

1. **Write a function that converts currency from dollars to euros.**
   
   Assuming the conversion rate is 0.85 euros for 1 dollar (please adjust as per the current rate):

```javascript
function convertDollarsToEuros(dollars) {
    const conversionRate = 0.85;  // Adjust this as per the current rate
    return dollars * conversionRate;
}

console.log(convertDollarsToEuros(100));  // Example usage
```

2. **Write an arrow function that calculates the total interest on a given amount and rate.**

```javascript
const calculateInterest = (amount, rate) => amount * rate;

console.log(calculateInterest(1000, 0.05));  // Example usage
```

3. **Write a function that takes in an `amount` and returns a message if the user can afford it based on a predefined `balance`.**

```javascript
let balance = 500;  // Predefined balance

function canAfford(amount) {
    if (amount <= balance) {
        return "You can afford this!";
    } else {
        return "Sorry, you cannot afford this.";
    }
}

console.log(canAfford(400));  // Example usage
```

4. **Write a function that takes in a `riskProfile` and returns appropriate investment advice using a switch statement.**

```javascript
function investmentAdvice(riskProfile) {
    switch (riskProfile) {
        case "low":
            return "Consider investing in bonds or fixed deposits.";
        case "medium":
            return "Consider a mix of equities and bonds.";
        case "high":
            return "Consider investing in equities or high-risk assets.";
        default:
            return "Unknown risk profile. Please consult a financial advisor.";
    }
}

console.log(investmentAdvice("medium"));  // Example usage
```
