/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. StoreMark'sandJohn's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing informatio nabout
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


let markMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = (markMass / (markHeight * markHeight)).toFixed(1);
let johnBMI = (johnMass / (johnHeight * johnHeight)).toFixed(1);

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉


if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
if (johnBMI > markBMI) {
  console.log(`John's BMI (${markBMI}) is higher than Mark's (${johnBMIBMI})!`);
}
if (markBMI === johnBMI) {
  console.log(`John's BMI (${markBMI}) is the same as Mark's (${johnBMI})!`);
}

Coding Challenge #3:

Two gymnastics teams, Dolphins and Koalas, are competing against each other three times. The team with the highest average score will be awarded the trophy. Here are your tasks:

Calculate the average score for each team using the test data below.

Compare the teams' average scores to determine the winner of the competition and print the result to the console. Consider the possibility of a draw.

Bonus 1: Introduce a minimum score requirement of 100 points. A team can only win if it has a higher score than the other team and, at the same time, a score of at least 100 points. Hint: Use logical operators to test for the minimum score, along with multiple else-if blocks 😉.

Bonus 2: The minimum score also applies to a draw. A draw occurs only when both teams have the same score and each has a score greater than or equal to 100 points. Otherwise, no team wins the trophy.
Test data:

Data 1: Dolphins score 96, 108, and 89. Koalas score 88, 91, and 110.
Data Bonus 1: Dolphins score 97, 112, and 101. Koalas score 109, 95, and 123.
Data Bonus 2: Dolphins score 97, 112, and 101. Koalas score 109, 95, and 106.

let dolphinsAverage = ((96 + 108 + 89) / 3).toFixed(1);
let koalasAverage = ((88 + 91 + 110) / 3).toFixed(1);
console.log(dolphinsAverage);
console.log(koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(
    `Dolphins won against Koalas with a Score of ${dolphinsAverage} to ${koalasAverage}`
  );
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log(
    `The game between the Dolphins and Koalas ended in a draw with a Score of  ${dolphinsAverage} to ${koalasAverage} `
  );
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(
    `Koalas won against Dolphins with a Score of ${koalasAverage} to ${dolphinsAverage}`
  );
} else {
  console.log("None of the teams managed to score higher than 100");
}

// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}


Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:

Data 1: Test for bill values 275, 40 and 430

Hints:

To calculate 20% of a value, simply multiply it by 20/100 = 0.2
Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK😀

*/

const age = 23;

age >= 18
  ? console.log("i like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let bill = 275;

const tip =
  bill >= 50 && bill <= 300
    ? console.log(
        `The bill was ${bill}, the tip was ${
          bill * 0.15
        }, and the total value ${bill + bill * 0.15}`
      )
    : console.log(
        `The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${
          bill + bill * 0.2
        }`
      );
