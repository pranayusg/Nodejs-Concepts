/*
  setTimeout issues
  setTimeout has timer of 5 secs but the callback function in setTimeout doesn't exatly execute after 5 secs

  The reason behind this is the call stack where JS gets executed through Execution contexts is not empty for the event queue to get the callback function from event queue to callstack after 5 secs
  It only gets chance to execute when the call stack is empty (ie all the execution contexts are popped out of call stack)
*/

console.log('Start');

setTimeout(function(){
    console.log('From setTimeout');
},5000)


console.log('Middle');


var start=new Date().getTime();
var end=start;

while(end<start + 10000){
    end=new Date().getTime();
}


console.log('While expires');

