// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
let temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

temperatures = temperatures.filter((e) => e !== 'error');
console.log(temperatures);

console.log(Math.max(...temperatures));

const calcAmp = () => {
  let amplitude = Math.max(...temperatures) - Math.min(...temperatures);
  return amplitude;
};

console.log(calcAmp());

// Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
// Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."

// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// GOOD LUCK😀

*/

const temperatures = [17, 21, 23, -9, 19];
console.log(temperatures);

const printForecast = (arr) => {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log('...' + forecast);
};

printForecast(temperatures);
