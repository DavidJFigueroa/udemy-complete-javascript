"use strict";

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 && birthYear <= 1996) {
//       var millenial = true;

//       //will look for this variable first as its in the function scope
//       const firstName = "Jens";

//       output = "New Output!";
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // refernce error
//     // console.log(str);

//     // Var scope
//     console.log(millenial);
//     // with strict mode functions are also block scoped
//     // add(2, 3);
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = "David";
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = 1991;

// console.log(addDecl);
// console.log(addExpr(2, 3));
// console.log(addArrow);

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
//because !numproducts in the if block is not 10 but undefined, cause of hoisting. So its better never to use var
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted");
// }

const david = {
  firstName: "David",
  year: 1988,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

david.calcAge();
