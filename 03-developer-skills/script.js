// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

temperatures = temperatures.filter((e) => e !== 'error');
console.log(temperatures);

console.log(Math.max(...temperatures));

const calcAmp = () => {
  let amplitude = Math.max(...temperatures) - Math.min(...temperatures);
  return amplitude;
};

console.log(calcAmp());
