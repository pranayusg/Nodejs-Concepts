
/*  Execution contexts */

// console.log(x);

// var x=7;
// getName();
// getName1();

// function getName(){
//     console.log('Welcome');
// }

// function getName1(){
//     console.log('Welcome1');
// }

// // console.log(x);
// console.log(getName);



/* Temporal dead zone  */
// console.log(a);
// let a=10;
// console.log(a);
// var b=100;



/* let and const are block scoped */

// {
//     var a=10;
//     let b=20
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);



/* Behaviour of var globally and in block (Shadowing) */

// var a=100;
// {
//     var a=10;
//     let b=20
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);



/* Behaviour of let globally and in block  */

// let b=100;
// {
//     var a=10;
//     let b=20
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);


/* Closures */

// function a() {
//     var a = 10;
//     function b() {
//         console.log(a);
//     }
//     return b;
// }

// // a()();

// var b=a();
// b();