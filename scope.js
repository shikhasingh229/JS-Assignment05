// program showing difference of global and local scope of a variable
let a = "Hello"; //a is global variable

function greet() {
    let b = " World" //b is local variable
    console.log(a + b);
}

greet();// will print 'Hello World' on console as console.log uses variables 'a' which is global i.e. accessible to all and variable 'b' which is local to function greet
console.log(a + b); // error as local variable 'b' is not accessible outside the function greet