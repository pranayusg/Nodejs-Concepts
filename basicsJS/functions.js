
// a();
// b();

// Function statement or function declaration
function a(){
    console.log("a");
}

// Function Expression
var b=function (){
    console.log("b");
}

a();
b();

//Major difference between Function statement and  Function Expression is hoisting

// Anonymous function (Functions without a name)

// Cannot be used without a name but can be used in variables

// function (){

// }


//Functions Parameters and arguments
function c(params1, params2) {
    console.log(params1, params2)
}
var arg1 = 1, args2 = 2;
c(arg1, args2)



//First class functions

//The ability to pass functions as values to other functions and also return functions from a function is known as First class functions

function d() {
    return function xyz() {

    }
}

console.log(d());

function e(params1) {
    console.log(params1)
}

function xyz() {

}
e(xyz);








