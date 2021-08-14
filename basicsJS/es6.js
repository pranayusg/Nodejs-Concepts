/* ES6 
module import,arrow syntax fns,array.map fn,let & const,Object destructing,Spread operator
*/

// var is function scope here
function sayHello(){
    for(var i=0;i<3;i++){
        console.log(i);
    }
    console.log(i);
}

sayHello();

// let is block scope here
// function sayHello1(){
//     for(let i=0;i<3;i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// sayHello1();

// this 
const person={
    name:'Pranay',
    walk(){
         console.log(this);
    }
}

person.walk();

const walk=person.walk.bind(person)
walk();

// arrow syntax

// const square=function(number){
//     return number*number;
// }

const square=number=> number*number;
console.log(square(5));


// arrow syntax and this

const person1={
    talk(){
        setTimeout(function(){
            console.log(this);
        },1000)
    
    }
}

const person2={
    talk(){
        var self=this;
        setTimeout(function(){
            console.log(self);
        },1000)
    
    }
}

const person3={
    talk(){
        setTimeout(()=>{
            console.log(this);
        },1000)
    
    }
}

// This will not print the object itself because it is in a callback fn(a stand alsone fn,not a part of of an object)
person1.talk();
person2.talk();
person3.talk();

// array.map and template literals (It will call the callback function for each value in an array)
const colors=['red','orange','blue']
const items=colors.map(color=>`<li>${color}</li>`);

console.log(items)

// Object destructing

const address={
    street:'Tramstrasse 3a',
    city:'Zurich',
    country:'Switzerland'
}

// const street=address.street;
// const city=address.city;
// const country=address.country;

// {} destructuring syntax,name of target properties,this will set same names to same object properties
const { street,city,country}=address;

// If we want to use different name for target property then we use aliases
// Alias
const { city :ct }=address;

console.log(street,ct)


// Spread operator
const first=[1,2,3];
const second=[4,5,6];

// const combined= first.concat(second);
const combined= [...first,'a',...second,'b'];

console.log(combined);

const clone=[...first];

console.log(clone);

// template literals
// backtick can be also used to write on a new line while earlier \n was used to do this
// ${expression}

let principal = 1000;
let noofyears = 1;
let rateofinterest = 7;
  
let SI = `Simple Interest is ${(principal *
            noofyears * rateofinterest)/100}`;
