"use strict";

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2.
5. Ignore draws this time.

Test data:

Data 1: Dolphins score 44, 23, and 71. Koalas score 65, 54, and 49.
Data 2: Dolphins score 85, 54, and 41. Koalas score 23, 34, and 27.

Hints:

To calculate the average of 3 values, add them all together and divide by 3.
To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores. 

GOOD LUCK! 😃

Data 1

const dolphinsScore = 44 + 23 + 71;
const koalasScore = 65 + 54 + 49;

const calcAverage = (score) => {
  const average = score / 3;
  return average;
};

const dolphinsAverage = calcAverage(dolphinsScore);
console.log(dolphinsAverage);

const koalasAverage = calcAverage(koalasScore);
console.log(koalasAverage);

let checkWinner = function (dolphinsAverage, koalasAverage) {
  if (dolphinsAverage >= 2 * koalasAverage) {
    console.log(`Dolphins win (${dolphinsAverage} vs ${koalasAverage}`);
  } else if (koalasAverage >= 2 * dolphinsAverage) {
    console.log(`Koalas win (${koalasAverage} vs ${dolphinsAverage})`);
  } else {
    console.log(`No one wins :(`);
  }
};

checkWinner(dolphinsAverage,koalasAverage);

Data 2

const dolphinsScore = 85 + 54 + 41;
const koalasScore = 23 + 34 + 27;

const calcAverage = (score) => {
  const average = score / 3;
  return average;
};

const dolphinsAverage = calcAverage(dolphinsScore);
console.log(dolphinsAverage);

const koalasAverage = calcAverage(koalasScore);
console.log(koalasAverage);

let checkWinner = function (dolphinsAverage, koalasAverage) {
  if (dolphinsAverage >= 2 * koalasAverage) {
    console.log(`Dolphins win (${dolphinsAverage} vs ${koalasAverage})`);
  } else if (koalasAverage >= 2 * dolphinsAverage) {
    console.log(`Koalas win (${koalasAverage} vs ${dolphinsAverage})`);
  } else {
    console.log(`No one wins :(`);
  }
};

checkWinner(dolphinsAverage, koalasAverage);

Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So create an array 'bills' containing the test data below.

Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.

Bonus: Create an array 'total' containing the total values, so the bill + tip.

Test data: 125, 555, and 44.

Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array).

GOOD LUCK! 😃



const bills = [125, 555, 44];

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    let tip = bill * 0.15;
    return tip;
  } else {
    let tip = bill * 0.2;
    return tip;
  }
};

// const tips = [calcTip(125), calcTip(555), calcTip(44)];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);

CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture





const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(john.calcBMI());

console.log(
  `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
    john.fullName
  }'s BMI (${john.calcBMI()})!`
);

CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.


BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(tips, totals); 

// Bonus

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
