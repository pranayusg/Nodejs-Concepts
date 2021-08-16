const db = require("./db");
const methods = {};

// Testing numbers

/* module.exports=function (number){
    if (number>0) return number;
    if(number<0) return -number;
    return 0;
}
 */

// Hence unit tests also help in refactoring code with confidence
methods.absolute = function (number) {
  return number >= 0 ? number : -number;
};

methods.greet = function (name) {
  return "Welcome" + name;
};

methods.resgisterUser = function (username) {
  if (!username) throw new Error("Username is required");

  return { id: new Date().getTime(), username: username };
};

methods.fizzBuzz = function (input) {
  if (typeof input != "number") throw new Error("Input should be a number");
  if (input % 15 == 0) return "FizzBuzz";
  if (input % 3 == 0) return "Fizz";
  if (input % 5 == 0) return "Buzz";
  else return input;
};

methods.applyDiscount = function (order) {
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) order.totalPrice *= 0.9;
};

module.exports = methods;
