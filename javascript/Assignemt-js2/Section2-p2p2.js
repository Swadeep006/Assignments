/* By storing the value of this from the outer function in a variable (commonly called self or that), we can keep a reference to the correct context: */


const userCorrectedTraditional = {
    name: "Alice",
    greetDelayed: function() {
      const self = this; // Capture the correct context
      setTimeout(function() {
        console.log(`Hello, ${self.name}!`);
      }, 1000);
    }
  };
  
  userCorrectedTraditional.greetDelayed(); // Outputs: Hello, Alice!
  
/*self holds the reference to the user object, and we access self.name inside the callback instead of this.name. This technique ensures that the callback still refers to the correct user object. */