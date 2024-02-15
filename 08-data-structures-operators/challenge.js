/*
 CODING CHALLENGE #1


We're building a football betting app (soccer for my American friends 😅)! Suppose we get data from a web service about a certain game ('game' variable on the next page). In this challenge, we're gonna work with that data. Your tasks: 

1. Create one player array for each team (variables 'players1' and 'players2').
2. The first player in any player array is the goalkeeper, and the others are field players. For Bayern Munich (team 1), create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
3. Create an array 'allPlayers' containing all players of both teams (22 players).
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho', and 'Perisic'.
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw', and 'team2').
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in).
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski', and 'Kimmich'. Then, call the function again with players from game.scored.

GOOD LUCK 😃
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
const [players1, players2] = game.players;
// console.log(players1, players2);

const [gk, ...fieldPlayers] = [...players1, players1];
// console.log(gk);
// console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(
    `There were ${players.length} goals scored. ${players} scored a goal. `
  );
};

printGoals(...game.scored);

team1 < team2 && console.log(`${game.team1} is more likely to win`);
team1 > team2 && console.log(`${game.team2} is more likely to win`);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Coding Challenge #2

Let's continue with our football betting app! Keep using the 'game' variable from before.

Your tasks:

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski").
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember).
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

   - Odd of victory Bayern Munich: 1.33
   - Odd of draw: 3.25
   - Odd of victory Borrussia Dortmund: 6.5

   Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

   ```javascript
   {
     Gnarby: 1,
     Hummels: 1,
     Lewandowski: 2
   }
   ```

GOOD LUCK 😀

*/
/*

const goals = [...game.scored];
console.log(goals);

for (const [i, el] of goals.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

const odds = Object.values(game.odds);
console.log(odds);

// let sum = 0;
// for (let i = 0; i < odds.length; i++) {
//   sum += odds[i];
// }
// console.log(sum / odds.length);

let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const scorers = {};

for (const key of goals) {
  scorers[key] = (scorers[key] || 0) + 1;
}

console.log(scorers);




Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL GOOD LUCK😀"



const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const eventsMap = [...gameEvents.values()];
// console.log(eventsMap);

const events = [...new Set(eventsMap)];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

// const gameLength = 90;
// const eventAverage = gameLength / gameEvents.size;
// console.log(eventAverage);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const textarea = document.querySelector("textarea");
const trimmedValuesArray = [];

document.querySelector("button").addEventListener("click", function (e) {
  const values = textarea.value;
  const splitValues = values.split("\n");
  // console.log(values);

  for (const element of splitValues) {
    const trimmedValues = element.toLowerCase().trim();

    trimmedValuesArray.push(trimmedValues.split("_"));
  }

  // console.log(trimmedValuesArray);

  const joinedArray = [];

  for (const innerArray of trimmedValuesArray) {
    innerArray[1] = innerArray[1][0].toUpperCase() + innerArray[1].slice(1);
    joinedArray.push(innerArray.join(""));
  }

  // console.log(joinedArray);

  for (const el of joinedArray) {
    const checkmark = "✅".repeat(joinedArray.indexOf(el) + 1);
    console.log(el.padEnd(20, " ") + " " + checkmark);
  }
});
