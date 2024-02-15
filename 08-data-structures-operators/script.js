"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split("+"));

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  let output = `${type.replace(/_/g, " ")} from ${from
    .replace(/[0-9]/g, "")
    .toUpperCase()} to ${to
    .replace(/[0-9]/g, "")
    .toUpperCase()} (${time.replace(":", "h")})`;

  if (output.includes("Delayed")) {
    output = `🚨` + output;
  }

  if (output.length < 45) {
    output = output.padStart(45, " ");
  }
  console.log(output);
}

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // we can also compute property names [`day-${2 + 4}`]
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  // Easier Syntax for function methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // we pass in 1 object as an argument (not 4 arguments)
  // then we immediately destructe
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3},`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*

//////////// Working with Strings - Part  3

// Split

console.log("a+very+nice+string".split("+"));
console.log("David Figueroa".split(" "));

const [firstName, lastName] = "David Figueroa".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n[0].replace(n[0], n[0].toUpperCase() + n.slice(1)));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("Jonas".padStart(25, "+").padEnd(35, "+"));

const maskCreditCard = function (number) {
  // convert number to string
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "x");
};

console.log(maskCreditCard(1238128309128308));
console.log(maskCreditCard("1238128309128303487289348"));
maskCreditCard("1238128309128303487289348");

// repeat

const message2 = "Bad weather...All Departures delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(4);
planesInLine(8);
/*
//////////// Working with Strings - Part  2

const passenger = "dAvId";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = "mail@davidjfigueroa.com";
const loginEmail = " Mail@DavidjFigueroa.Com \n";

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcment =
  "All passangers come to boarding door 23! Boarding door 23!";

console.log(announcment.replaceAll("door", "gate"));

// without replaceAll
console.log(announcment.replace(/door/g, "gate"));

// Booleans

const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

// Practice exercise

const checkBaggage = function (items) {
  if (
    items.toLowerCase().includes("knife") ||
    items.toLowerCase().includes("gun")
  ) {
    console.log("Sorry my friend, you are arrested");
  } else {
    console.log("Youre good to go");
  }
};

checkBaggage("I have a laptop, some food and a pocket Knife");
checkBaggage("I have some socks and a camera");
checkBaggage("I got some snacks and a gun for protection");
/*

//////////// Working with Strings - Part 1

const airline = "TAP Air Portugal";
const plane = "A320";

// Get first letter
console.log(plane[0]);
console.log("A320"[0]);

console.log(airline.length);
console.log("8787".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Air"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middleseats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You are lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("3E");
checkMiddleSeat("23C");



/*
//////////// Maps: Iteration

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try again!"],
]);

console.log(question);

// Convert object to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Anser ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));

// if (answer === question.get("correct")) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// faster way
// console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*

////////// Maps: Fundamentals

// A map is data structure that stores data in keys. The differnce of objects and maps is that in maps the keys can have any type (even objects or arrays or other maps)

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", [("Italian", "Pizzeria", "Vegetarian", "Organic")])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("closed")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

/*

/////////// Sets

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);

// Cause strings are also iterables
console.log(new Set("David"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");

// We cant do this cause a set, doesnt have indexes. We never need to get data out of a set. Because if all values are unique and their order doesnt matter, it doesnt make sense to get data. So if you need to get data out or indexes then its better to use an array. We just need to check if the values are in the set, thats the only use

console.log(ordersSet[0]);

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// The main usecase for sets is to remove duplicate values of arrays

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffSet = new Set(staff);

// Conversion from set to array
const staffSet = [...new Set(staff)];

console.log(staffSet);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("davidfigueroa").size);

/*
///////////// LOOPING OBJECTS

//// Property Names

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

///// Property values

const values = Object.values(openingHours);
console.log(values);

// we need entries (properties + values) to loop over objects

const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close} `);
}

/*

//////////////////// OPTIONAL CHAINING

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{name: "David", email: "hello@mail.com"}];

console.log(users[0]?.name ?? "user array empty");

// same as
if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");

// Optional Chaining operator almost always used with nullish coalescing operator

/*
///////////////// FOR LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];


for (const item of menu) console.log(item);

// If we need the index
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// using destructering

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

/*

///////////////// LOGICAL ASSIGNMENT OPERATORs

const rest1 = {
  name: "capri",
  numGuests: 0,
};

const rest2 = {
  name: "Piazza",
  owner: "Luigi Rossi",
};


// Using || operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// using logical assignment operator, is falsy so doesnt work with 0 guests

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// solution to 0, logical nullish assignment operator

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//replace the owner
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
/*

/////////// NULLISH COALESCING OPERATOR

// Only nullish(null and undefinded) will shortcircuit the operation
// Not 0 or " "
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

///////////// SHORT CIRCUITING

// Use any Data Type, return any data type
// short-circuiting means if first value is truthy it will be returned immediately and the second value will not be looked at
console.log("----OR----");
console.log(3 || "David");
console.log("" || "David");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || 0);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// setting the default to 10 with short circuiting
const guests2 = restaurant.numGuests || 10;

console.log("----AND-----");

// Works in the opposite of ||
// If value is falsy first one is returned
console.log(0 && "Jonas");
// IF value is truthy last one is returned
console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinage");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinage");


/////////////// REST Operator

// Rest operator is always on the left side, Spread is always on th eright

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2 Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(12, 3);
add(2, 3, 5, 4);
add(8, 8, 65, 9, 69);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushroom", "olives", "spinage");
restaurant.orderPizza("cale");

// Rest serves to collect all unused parameters. Rest and spread look the same but work in the opposite way. Spread would be used when we otherwise write values separated by a comma. The rest operator would be used if we write variable names separated by comma and NOT values 


////////////// Spread operator ...

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// If we need the elements of an array seperately, we use the spread operator ...
// The spread operator is creating a NEW array not changing the old one
// Difference to destructuring cause it doesnt create new values. So we can only uses when we write values separated by commas
const newArr = [1, 2, ...arr];
console.log(...newArr);



const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array

const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays or more

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT ojects

const str = "David";
const letters = [...str, " ", "F."];
console.log(letters);
console.log(...str);

// Cant be used in a template literal cause it doesnt expect something with multiple commas
console.log(`{...str} Figueroa`);

// const ingredients = [
//   prompt("Lets make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Also works on objects since ES6

const newRestaurant = {...restaurant, founder: "Luigi", foundedIn: 1988};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";



restaurant.orderDelivery({
  time: "22:30",
  address: "Via Del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

// making use of the default values
restaurant.orderDelivery({
  address: "Via Del Sole, 21",
  starterIndex: 2,
});

//////////////// Destructuring Objects

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objacts

// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// cant use let {a,b} cause we already have it
// needs to be wrapped in parenthesis
({a, b} = obj);

// Nested Objects

const {
  fri: {open: o, close: c},
} = openingHours;
console.log(o, c);

/////////////////////// Destructuring Arrays

// const arr = [2, 3, 4];
// without destructuring
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// destructuring, looks like an array but its not
// Javascript knows that brackets on the left before = means destructuring
// original Array is not affected
const [x, y, z] = arr;
console.log(x, y, z);

// if we leave a space and skip and element it selects the next one
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// if we want to switch main and secondary

// without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;

// with destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// We can set default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


*/
