function processArguments(primaryFunction, ...args) {
  return primaryFunction(...args);
}

// Example primary function: multiply two numbers
function multiply(x, y) {
  return x * y;
}

// Usage
console.log(processArguments(multiply, 4, 5)); // 20

// Another example: concatenating strings
function joinStrings(...parts) {
  return parts.join(" ");
}

console.log(processArguments(joinStrings, "Hello", "there", "world!")); // Hello there world!
