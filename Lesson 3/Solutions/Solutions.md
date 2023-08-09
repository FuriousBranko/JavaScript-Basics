### Lesson 3: Functions

**Tasks**:

1. **Write a function that converts currency from dollars to euros.**
   ```javascript
   const exchangeRate = 0.85;  // Assuming 1 dollar is 0.85 euros

   function convertToEuros(dollars) {
       return dollars * exchangeRate;
   }

   console.log(convertToEuros(100));  // Should print 85
   ```

2. **Write an arrow function that calculates the total interest on a given amount and rate.**
   ```javascript
   const calculateInterest = (amount, rate) => amount * rate;

   console.log(calculateInterest(1000, 0.05));  // Should print 50
   ```

3. **Write a function that takes in an `amount` and returns a message if the user can afford it based on a predefined `balance`.**
   ```javascript
   function canAfford(amount) {
       if (balance >= amount) {
           return "You can afford this purchase!";
       } else {
           return "You cannot afford this purchase.";
       }
   }

   console.log(canAfford(120));  // Message based on the balance
   ```

4. **Create an array of stock prices. Write a function that takes in a threshold value and returns stocks above that threshold using `filter`.**
   ```javascript
   let stockPrices = [90, 110, 95, 105, 115];

   function stocksAboveThreshold(threshold) {
       return stockPrices.filter(price => price > threshold);
   }

   console.log(stocksAboveThreshold(100));  // Should print [110, 105, 115]
   ```

