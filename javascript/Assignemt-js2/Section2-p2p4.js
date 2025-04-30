/* Failing Version */

const example = {
  value: 42,
  showValueDelayed: function () {
    setTimeout(function () {
      console.log(`Value: ${this.value}`);
    }, 1000);
  },
};

example.showValueDelayed(); // Outputs: Value: undefined
//   In this version, this.value fails because the function inside setTimeout loses the context of example.

/* Fixed Version */

const exampleFixed = {
  value: 42,
  showValueDelayed: function () {
    setTimeout(() => {
      console.log(`Value: ${this.value}`);
    }, 1000);
  },
};

exampleFixed.showValueDelayed(); // Outputs: Value: 42
//   With an arrow function, this remains bound to the exampleFixed object, so this.value correctly refers to 42.
