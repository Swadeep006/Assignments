/* Arrow functions differ from regular functions because they do not have their own this. Instead, they lexically bind this—meaning they inherit this from their surrounding (enclosing) scope. */

const userCorrectedArrow = {
  name: "Bob",
  greetDelayed: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  },
};

userCorrectedArrow.greetDelayed(); // Outputs: Hello, Bob!


/* Here, this inside the arrow function refers to the same this as the enclosing greetDelayed method—i.e., the userCorrectedArrow object. This makes arrow functions ideal for callbacks where you want to retain the outer this. */