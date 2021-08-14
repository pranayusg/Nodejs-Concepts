/******************************************************************************************************* 
Demonstration of closures
********************************************************************************************************/

// var defines a global scope while let and const are block scoped
function x() {
    setTimeout(function () {
    console.log('In X')
}, 1000)
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000)
    }
}

function y() {
    setTimeout(function () {
        console.log('In Y')
    }, 2000)
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 2000)
    }
}

function z() {
    setTimeout(function () {
        console.log('In Z')
    }, 3000)

    var i = 1;
    for (i = 1; i <= 5; i++) {
        inner(i);
    }

    function inner(i) {
        setTimeout(function () {
            console.log(i);
        }, 3000)
    }
}

x()
y()
z()

// print i after i secs
for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i*1000)
}



// Also we can define functions in a variable and also pass functions as arguments to a function and also return function from a function.This is the beauty of JS


// functions when used under functions remembers its outer lexical environment (means has access to outer variables and Functions)
// Also when function is returned from a function it remembers its lexical scope
function a() {
    var a = 10;
    function b() {
        console.log(a);
    }
    return b;
}

// a()();

var c = a();
c();


// Advantages of closures
// Data privacy using closures
function counter() {
    var count = 0;
   return function incrementCounter() {
        count++;
        console.log(count);
    }
}

var counter1 =counter();
counter1();
counter1();
counter1();

var counter2 =counter();
counter2();
counter2();
counter2();

