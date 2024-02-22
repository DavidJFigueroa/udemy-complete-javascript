"use strict";

/*

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {flightNum, numPassengers, price};
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH128");
createBooking("LH328", 2, 800);
// use undefined if we need to keep the default value
createBooking("LH328", undefined, 800);

const flight = "LH123";
const david = {
  name: "David Figueroa",
  passport: 2302932390,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 2302932390) {
    alert("Check In");
  } else {
    alert("Wrong Passport");
  }
};
// checkIn(flight, david);
// console.log(flight);
// console.log(david);

// Passing a primitive type to a function is the same as creating a copy outside the function
// const flightNum = flight;
// With objects if we change something in the copy it will also be changed in the original
// const passenger = david;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(david);
console.log(david);
checkIn(flight, david);



// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("HI5");
};

document.body.addEventListener("click", high5);

["David", "Jens", "Hannah"].forEach(high5);



// Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// using Arrow function returning a function
// const greetArr = (greeting) => (name) => {
//   console.log(`${greeting} ${name}`);
// };

//same as
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);


// const greeterHey = greet("Hey");
// greeterHey("David");
// greeterHey("Rita");

// greet("Hi")("Andrea");
greetArr("Hi")("David");



const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  },
};

lufthansa.book(245, "Will Smith");
lufthansa.book(234, "Chris Rock");
console.log(lufthansa);

// Its a function call now and then the this keyword points to undefined in strict mode
const book = lufthansa.book;

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// does not work
// book(23, "Sarah Williams");

// Call Method

// use the call method and the first argument is what the this word refers to then
book.call(eurowings, 23, "Sarah Williams");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 23, "Mary Williams");

// Apply Methods

const flightData = [583, "George Clooney"];
book.apply(swiss, flightData);
// console.log(swiss);

// is the same as
book.call(swiss, ...flightData);

// BIND Method

// Allows us to manully set the this keyword aswell, but the difference is that it return a new function instead of calling it

//book.call(swiss, 23, "Mary Williams");

const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);

bookLX(23, "Mary Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Brad Pitt");

// With Eventlisteners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// Here the this keyword applies to the button
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial aaplication

let addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// null is the this keyword, that we dont need, 0.23 is the rate
const addVAT = addTax.bind(null, 0.23);
// same as
// addVAT = value => value + value * rate;

console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = Number(
      prompt(
        "What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)"
      )
    );

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, "string");

////////// Immediately Invoked Function Expressions

const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

(function () {
  console.log("This will never run again");
})();

(() => console.log("This will never run again"))();

{
  const isPrivate = 23;
}
// not accessible outside of a block
// console.log(isPrivate);

//////// Closures

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// Its possible for booker function to access varialble inside of secureBooking even though the function is already gone, cause a closure makes a function remember where the variable was created

// A closure is a like backpack of a function with all its variables in it

// console.dir(booker);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 77;
  f = function () {
    console.log(b * 2);
  };
};

g();

f();

h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} paassengers`);
    console.log(`There are 3 groups, each with ${perGroup} passangers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};



// setTimeout(function () {
//   console.log("TIME");
// }, 1000);

// closure has priority over global scope chain, thats why its not using this variable
const perGroup = 1000;
boardPassengers(180, 3);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  const body = document.body;
  body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
