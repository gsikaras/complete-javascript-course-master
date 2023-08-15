// 'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 524;





// function logger() {
//     console.log(`My name is Jonas`);
// }

// //calling / running / invokin the function
// logger();
// logger();
// logger();
/*
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const apppleOrangeJuice = fruitProcessor(2, 4);
console.log(apppleOrangeJuice);

const Name = "POLY";
console.log(`my first name is ${Name}!!!`);
*/

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1989);
// console.log(age1);


// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, `Giannis`));
// console.log(yearsUntilRetirement(1980, `Jonas`));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirement(1991, 'jonas'));
// console.log(yearsUntilRetirement(1970, 'Mike'));


// coding challenge.

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

//test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins wins! (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins! (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

//test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


// const friend1 = `Michael`;
// const friend2 = `Steven`;
// const friend3 = `Peter`;

// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);


// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2])

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `Jay`;
// console.log(friends);


// const jonas = {
//     firstname: `jonas`,
//     lastname: `schmedtmann`,
//     age: 2037 - 1991,
//     job: `teacher`,
//     friends: [`Michael`, `Peter`, `Steven`]
// };
// console.log(jonas);

// console.log(jonas.lastname);
// console.log(jonas[`lastname`]);


// const interestedIn = prompt(`What do u want to know about Jonas? Choose between firstname , lastname, age, job, and friends`);


// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log(`wrong request! Choose between firstname , lastname, age, job, and friends`)
// }

// jonas.location = `Portugal`;
// jonas[`twitter`] = `@jonasschmedtman`;
// console.log(jonas);

// /// Challenge
// // "jonas has 3 friends and his best friend is called Michael"
// console.log(`${jonas.firstname} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
//     firstname: `jonas`,
//     lastname: `schmedtmann`,
//     birthyeah: 1991,
//     job: `teacher`,
//     friends: [`Michael`, `Peter`, `Steven`],
//     hasDriversLicense: true,

// calcAge: function (birthyeah) {
//     return 2037 - birthyeah;
// }
// calcAge: function () {
//     // console.log(this)
//     return 2037 - this.birthyeah;
// }

//     calcAge: function () {
//         this.age = 2037 - this.birthyeah;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstname} is a ${this.calcAge()}-year old ${this.job} , and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
//     }
// };

// console.log(jonas.calcAge());


// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // challenge
// // jonas is a 46-year old teacher , and he has a drive's license

// console.log(jonas.getSummary());


// const Mark = {
//     fullName: `Mark Miller`,
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: `John Smith`,
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// Mark.calcBMI();
// john.calcBMI();

// console.log(Mark.bmi, john.bmi);

// if (Mark.bmi > john.bmi) {
//     console.log(`${Mark.fullName}'s BMI (${Mark.bmi} is higher than ${john.fullName}'s BMI (${john.bmi})`)
// }
// else if (john.bmi > Mark.bmi) {
//     console.log(`${Mark.fullName}'s BMI (${Mark.bmi} is Lower than ${john.fullName}'s BMI (${john.bmi})`)
// }


// console.log(`Lifting weights repetition 1`);
// console.log(`Lifting weights repetition 2`);
// console.log(`Lifting weights repetition 3`);
// console.log(`Lifting weights repetition 4`);
// console.log(`Lifting weights repetition 5`);

//for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }


// const jonas = [
//     `jonas`,
//     `schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [`Michael`, `Peter`, `Steven`],
//     true
// ];


// const types = [];


// for (let i = 0; i < jonas.length; i++) {
//     //reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     //filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break

// console.log(`----- ONLY STRINGS-----`)
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== `string`) continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log(`----- BREAK WITH NUMBER-----`)
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] == `number`) break;

//     console.log(jonas[i], typeof jonas[i]);
// }


// const jonas = [
//     `jonas`,
//     `schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [`Michael`, `Peter`, `Steven`],
//     true
// ];


// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`);
//     }
// }


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }


// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE : Lifting weights repetition ${rep} 🏋️‍♂️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice == 6) console.log(`Loop is about to end...`);
// }

// last challenge fundementals
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

