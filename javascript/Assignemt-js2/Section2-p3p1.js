/*
A closure is a function that “remembers” the variables from its outer (enclosing) scope even after that scope has finished executing. In the setupCounter example, increment and decrement are closures that capture the count variable. This allows them to maintain and update the state of count even after setupCounter has returned. Since each call to setupCounter creates a new instance of count, multiple counters can exist independently without interfering with each other.
*/
