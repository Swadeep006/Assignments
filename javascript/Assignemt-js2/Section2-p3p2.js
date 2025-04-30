function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

// Usage
const sayHello = createGreeting("Hello");
console.log(sayHello("World")); // Hello, World!

const sayWelcome = createGreeting("Welcome");
console.log(sayWelcome("Alice")); // Welcome, Alice!
