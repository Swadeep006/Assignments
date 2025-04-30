const user = {
    name: "Alice",
    greetDelayed: function() {
      setTimeout(function() {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    }
  };
  
  user.greetDelayed(); // Outputs: Hello, undefined!

  /*
  The problem lies in how this works inside the setTimeout callback. The regular function inside setTimeout has its own this context, which defaults to the global object (window in browsers) or undefined in strict mode. Therefore, this.name doesn't refer to the user object but to window.name (which is often undefined) or throws an error in strict mode.
   */