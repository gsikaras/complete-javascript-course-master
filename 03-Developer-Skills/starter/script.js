// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// 1) Understanding the problem
// - Array transformed to string , separated by ...
// - What is the X days? Answer : index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ℃
// - Strings need to contain day (index +1)
// - Add ... between elements and start and end of string

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`${data1[0]}℃ ... ${data1[1]}℃ ... ${data1[2]}℃ ... `);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}℃ in ${i + 1} days...  `;
//   }
//   console.log(`...` + str);
// };
// printForecast(data1);
