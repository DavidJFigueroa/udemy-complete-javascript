"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  // If sort is true then it will sort the movements as shallow copy and if not movements will simply be inserted
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const generateUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

generateUsernames(accounts);
console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Login

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split("")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fiels
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// Transfer

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAccount);
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
  }
  updateUI(currentAccount);
});

// Request lone

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// Delete Account

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

// Sort

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  // Second parameter is the sort parameter
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

/*

/////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];

// Slice

console.log(arr.slice(2));
console.log(arr.slice(2, 4));

console.log(arr.slice(-2));

// Always the last element
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// Both the same
console.log(arr.slice());
console.log([...arr]);

// Splice (same as slice, but acutally changes the original array. Often used to remove elements from array)

// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

// Second parameter is different from slice. It is the delete count (number of elements we want to delete)

arr.splice(1, 2);
console.log(arr);

// Reverse (also mutates the original array)
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// Concat (to concat 2 arrays) (Not mutating the original arrays)

const letters = arr.concat(arr2);
console.log(letters);

// Same as
console.log([...arr, ...arr2]);

// Join

console.log(letters.join("-"));



// At Method

const arr = [23, 22, 164];
// same
console.log(arr[0]);
console.log(arr.at(0));

// same as and much shorter
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));



// ForEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("----FOR EACH-----");

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});



const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// Map

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

// the key here does not apply, its just the same as value
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

*/

/// Map

// Map creates a new array. Usually more usefall than forEach

const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// same as
const movementsUSD = movements.map((mov) => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// same as
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// Access to current element, index & array

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
// console.log(movementsDescription);

/// Filter

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// console.log(movements);
// console.log(deposits);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

// console.log(withdrawals);

console.log(movements);

//// Reduce

// Accumulator -> Snowball
// Second parameter is where it should start counting. In this case 0
const balance = movements.reduce(function (acc, cur, i, arr) {
  // console.log(`Iterartion ${i}: ${acc}`);
  return acc + cur;
}, 0);

// console.log(balance);

// Maximum value

const maxValue = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

// console.log(maxValue);

//// Chaining Methods

// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// If we want to debug we can use the arr parameter

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

//// Find

// Will only return the first element that satisfies this condition. Where the filter return all elements matching the condition
// Find does not return a new array

const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

//// Some

// console.log(movements);
// Checks for equality
// console.log(movements.includes(-130));
// Checks for condition
const anyDeposits = movements.some((mov) => mov > 5000);
// console.log(anyDeposits);

//// Every
// console.log(movements.every((mov) => mov > 0));

// Separate Callback

const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// Flat and flatMap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// Default deepness
// console.log(arrDeep.flat(1));
// We need to go 2 layers deep
// console.log(arrDeep.flat(2));

// How to calculate all movements from all accounts

const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
const allMovements = accountMovements.flat();
// console.log(allMovements);
const sumMovements = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(sumMovements);

// same as
const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// same, but goes only one level deep
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

//// Sort

// Strings
// Changes the original array
const owners = ["Jonas", "David", "Zac", "Martha"];
// console.log(owners.sort());
// console.log(owners);

// Numbers
// console.log(movements);
// Result sorted as if it was strings
// console.log(movements.sort());
// return < 0 , A , B (keep order)
// return > 0 , B, A (switch order)
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

// same as
movements.sort((a, b) => {
  a - b;
});
// console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});

// same as
movements.sort((a, b) => {
  b - a;
});

// console.log(movements);

//// Fill Arrays
const arrFill = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6));

const x = new Array(7);
// creates empty array with 7 elements
// console.log(x);

// cant use map on this
// console.log(x.map(() => 5));
// have to use fill for this
// x.fill(1);

// specify a begin parameter and end parameter
x.fill(1, 3, 5);
// console.log(x);

arrFill.fill(23, 4, 6);
// console.log(arrFill);

const y = Array.from({length: 7}, () => 1);
// console.log(y);

// Array.from to recreate the original arrFill
// const z = Array.from({length: 7}, (cur, i) => i + 1);
// instead of cur which we dont need we write _ underscore
const z = Array.from({length: 7}, (_, i) => i + 1);
// console.log(z);

const randomDice = Array.from(
  {length: 100},
  () => Math.floor(Math.random() * 6) + 1
);
// console.log(randomDice);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    // now we map as a the second parameter of the array function
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI);
});

////////////// Array Methods Practice

// 1.
// const bankDepositSum = accounts.map((acc) => acc.movements).flat();
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter(deposit)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2.
// All deposits over 1000
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000);

// 3. Create a new object which contains the sum of all deposits and withdrawals

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    {deposits: 0, withdrawals: 0}
  );

console.log(sums);

// 4.
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");

  return titleCase;
};

console.log(convertTitleCase("This is a nice title"));
console.log(convertTitleCase("This is a LONG title but not too Long"));
