### Solutions for Lesson 4: Arrays, Objects, and Their Methods

1. **(Current Section)** Create an object named `portfolio` that has properties `stocks` (an array of stock names) and `balance`. Add methods to this object to `addStock(stockName)` and `removeStock(stockName)` which modify the `stocks` array.

```javascript
// Expected solution:
let portfolio = {
    stocks: ["AAPL", "GOOGL", "AMZN"],
    balance: 10000,
    addStock: function(stockName) {
        this.stocks.push(stockName);
    },
    removeStock: function(stockName) {
        let index = this.stocks.indexOf(stockName);
        if (index !== -1) {
            this.stocks.splice(index, 1);
        }
    }
};
```

2. **(Current Section)** Write an arrow function that takes in an array of numbers and returns an object with properties `max`, `min`, and `average` of the numbers in the array.

```javascript
// Expected solution:
const analyzeNumbers = (numbers) => {
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
    return { max, min, average };
};
```

3. **(Current + Basics)** Create a function named `describeStock` that takes in an object with properties `symbol`, `name`, and `price`. The function should return a string in the format: "The stock with symbol SYMBOL and name NAME is currently priced at PRICE."

```javascript
// Expected solution:
function describeStock(stock) {
    return `The stock with symbol ${stock.symbol} and name ${stock.name} is currently priced at $${stock.price}.`;
}
```

4. **(Everything Before)** Write a function named `evaluatePortfolio` that takes in an object representing a portfolio. This object should have properties `stocks` (an array of stock objects) and `balance`. Each stock object has properties `name`, `price`, and `quantity`. The function should calculate the total value of the portfolio (stocks + balance) and return a message indicating if the portfolio has gained value (assuming an initial value of $10,000).

```javascript
// Expected solution:
function evaluatePortfolio(portfolio) {
    let stockValue = portfolio.stocks.reduce((acc, stock) => acc + (stock.price * stock.quantity), 0);
    let totalValue = stockValue + portfolio.balance;
    
    if (totalValue > 10000) {
        return "Your portfolio has gained value!";
    } else if (totalValue < 10000) {
        return "Your portfolio has lost value.";
    } else {
        return "Your portfolio value remains unchanged.";
    }
}
```
