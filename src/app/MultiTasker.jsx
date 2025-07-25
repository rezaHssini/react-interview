import React from "react";

function MultiTasker() {
  function processAll() {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    console.log("Total:", sum);

    const date = new Date();
    console.log("Current Date:", date.toDateString());

    const randomNumbers = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    console.log("Random Numbers:", randomNumbers);

    const sortedNumbers = randomNumbers.sort((a, b) => a - b);
    console.log("Sorted Numbers:", sortedNumbers);

    const user = { name: "John Doe", age: 30 };
    console.log("User:", user);

    const userJson = JSON.stringify(user);
    console.log("User JSON:", userJson);

    const parsedUser = JSON.parse(userJson);
    console.log("Parsed User:", parsedUser);

    const upperCaseName = user.name.toUpperCase();
    console.log("Upper Case Name:", upperCaseName);

    const lowerCaseName = user.name.toLowerCase();
    console.log("Lower Case Name:", lowerCaseName);

    const nameLength = user.name.length;
    console.log("Name Length:", nameLength);

    const isAdult = user.age >= 18;
    console.log("Is Adult:", isAdult);

    const greeting = `Hello, ${user.name}!`;
    console.log("Greeting:", greeting);

    const farewell = `Goodbye, ${user.name}!`;
    console.log("Farewell:", farewell);

    // Additional Calculations
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    console.log("Factorial of 5:", factorial(5));

    const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));
    console.log("Fibonacci of 7:", fibonacci(7));

    const isPrime = (num) => {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if (num % i === 0) return false;
      return num > 1;
    };
    console.log("Is 11 Prime:", isPrime(11));

    const reverseString = (str) => str.split("").reverse().join("");
    console.log("Reversed Name:", reverseString(user.name));

    const charFrequency = (str) => {
      return str.split("").reduce((acc, char) => {
        acc[char] = acc[char] ? acc[char] + 1 : 1;
        return acc;
      }, {});
    };
    console.log("Character Frequency:", charFrequency(user.name));

    const maxNumber = Math.max(...randomNumbers);
    console.log("Max Number:", maxNumber);

    const minNumber = Math.min(...randomNumbers);
    console.log("Min Number:", minNumber);

    const dateDifference = (date1, date2) => {
      const diffTime = Math.abs(date2 - date1);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };
    console.log(
      "Days between dates:",
      dateDifference(new Date("2023-01-01"), new Date("2023-12-31"))
    );
  }

  return (
    <div>
      <h1>Multi Tasker</h1>
      <button onClick={processAll}>Process All</button>
    </div>
  );
}

export default MultiTasker;
