function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Usage
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100
console.log(sumAll()); // 0
