## Arrays, Objects, and Their Methods in JavaScript

### Introduction

Arrays are ordered collections of items, while objects store properties as key-value pairs. In financial terms, think of arrays as a list of transactions, stock prices, or any sequential data, and objects as records with specific attributes, like a customer's profile or a stock's details.


### Basics of Arrays

1. **Declaration and Initialization**:
   ```javascript
   let stockPrices = [100, 105, 110, 115, 120];
   ```

2. **Accessing Elements**:
   ```javascript
   let firstPrice = stockPrices[0];  // 100
   ```

3. **Modifying Elements**:
   ```javascript
   stockPrices[1] = 106;
   ```

### Basic Array Methods

1. **`push`**: Adds one or more elements to the end of an array and returns the new length.
   ```javascript
   stockPrices.push(125, 130);
   ```

2. **`pop`**: Removes the last element from an array and returns that element.
   ```javascript
   let lastPrice = stockPrices.pop();
   ```

3. **`shift`**: Removes the first element from an array and returns that element.
   ```javascript
   let firstRemovedPrice = stockPrices.shift();
   ```

4. **`unshift`**: Adds one or more elements to the beginning of an array and returns the new length.
   ```javascript
   stockPrices.unshift(95, 100);
   ```

5. **`splice`**: Adds/removes items to/from an array and returns the removed item(s).
   ```javascript
   stockPrices.splice(2, 1, 107);  // Starting from index 2, remove 1 item and add 107
   ```

6. **`slice`**: Selects a part of an array and returns the new array.
   ```javascript
   let selectedPrices = stockPrices.slice(1, 4);  // Selects items from index 1 to 3 (end index is non-inclusive)
   ```

7. **`concat`**: Merges two or more arrays.
   ```javascript
   let previousPrices = [90, 92, 94];
   let allPrices = previousPrices.concat(stockPrices);
   ```

8. **`join`**: Joins all elements of an array into a string.
   ```javascript
   let priceString = stockPrices.join(", ");
   ```

### Advanced Array Methods

1. **`map`**: Transforms each element in the array.
   ```javascript
   let updatedPrices = stockPrices.map(price => price * 1.05);
   ```

2. **`filter`**: Returns a new array with elements that pass a test.
   ```javascript
   let highPrices = stockPrices.filter(price => price > 110);
   ```

3. **`find`**: Returns the first element that passes a test.
   ```javascript
   let specificPrice = stockPrices.find(price => price > 110);
   ```

4. **`findIndex`**: Returns the index of the first element that passes a test.
   ```javascript
   let specificPriceIndex = stockPrices.findIndex(price => price > 110);
   ```

5. **`reduce`**: Reduces the array to a single value by executing a provided function on each element.
   ```javascript
   let totalValue = stockPrices.reduce((acc, price) => acc + price, 0);
   ```
### Basics of Objects

1. **Declaration and Initialization**:
   ```javascript
   let stock = {
       symbol: "AAPL",
       name: "Apple Inc.",
       price: 150
   };
   ```

2. **Accessing Properties**:
   - Using dot notation:
     ```javascript
     let stockName = stock.name;  // "Apple Inc."
     ```

   - Using bracket notation (useful when property names are dynamic or contain special characters):
     ```javascript
     let stockSymbol = stock["symbol"];  // "AAPL"
     ```

3. **Modifying Properties**:
   ```javascript
   stock.price = 155;
   ```

4. **Adding New Properties**:
   ```javascript
   stock.exchange = "NASDAQ";
   ```

5. **Deleting Properties**:
   ```javascript
   delete stock.exchange;
   ```

### Common Object Manipulations

1. **Iterating Over Object Properties**:
   ```javascript
   for (let key in stock) {
       console.log(key, stock[key]);
   }
   ```

2. **Checking if a Property Exists**:
   ```javascript
   if ("name" in stock) {
       console.log("The stock has a name property.");
   }
   ```

3. **Object Methods**: Objects can also store functions as properties, making them methods.
   ```javascript
   let account = {
       balance: 1000,
       deposit: function(amount) {
           this.balance += amount;
       },
       withdraw: function(amount) {
           this.balance -= amount;
       }
   };

   account.deposit(500);
   account.withdraw(200);
   ```

### Examples in a Financial Context

1. **Basic Array Methods**:
   - Using `push` and `pop` to add or remove transactions from a list.
   - Using `splice` to correct a specific transaction in the list.
   - Using `slice` to view transactions within a specific date range.
   - Using `concat` to merge quarterly transaction lists into an annual list.

2. **Advanced Array Methods**:
   - Using `map` to adjust stock prices based on a market factor.
   - Using `filter` to filter transactions that exceed a certain value.
   - Using `find` and `findIndex` to locate a specific transaction based on criteria.
   - Using `reduce` to calculate the total value of a portfolio or sum up monthly expenses.
  
3. **Objects**:
   - Using objects to represent individual stocks, with properties like symbol, name, price, and methods to adjust the price or calculate returns.
   - Representing a user's bank account with properties like account number, balance, and methods to deposit or withdraw funds.
   - Storing customer profiles with properties like name, address, and transaction history.
  
4. **Common Manipulations**:
   - Iterating over a user's profile to display their details.
   - Checking if a stock object has specific properties, like dividends or historical data.
   - Using object methods to perform common tasks, like updating a user's balance or calculating a stock's return on investment.
