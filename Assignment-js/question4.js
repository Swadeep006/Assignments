let username = "Swadeep";
function greet() {
    let greeting = "Hello";
    console.log(greeting + ", " + username); // Hello,Swadeep
    //Variable Shadowing
    let username = "Deep"; 
    console.log(greeting + ", " + username); // Hello,Deep
    //Block Scope
    if (true) {
        let mood = "Happy";
        console.log(mood); //Happy
    }
}
greet();

console.log("global scope " + username); // global scope Swadeep