function createUniqueCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    getValue: function () {
      return count;
    },
  };
}

const counter1 = createUniqueCounter();
const counter2 = createUniqueCounter();

console.log("Counter 1 increment:", counter1.increment()); 
console.log("Counter 1 value:", counter1.getValue()); 

console.log("Counter 2 increment:", counter2.increment()); 
console.log("Counter 2 increment:", counter2.increment()); 
console.log("Counter 2 value:", counter2.getValue()); 

console.log("Trying to access counter1.count:", counter1.count);
