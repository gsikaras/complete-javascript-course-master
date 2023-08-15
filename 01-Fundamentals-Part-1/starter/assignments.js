
// let country = "Greece";
// let continent = "Europe";
// let population = 11000000;

// console.log(country);
// console.log(continent);
// console.log(population);


// let isIsland = false;
// let language = 'Greek';

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log(language);
// population++;
// console.log(population / 2);

// const finland = 6000000;
// console.log(population >= finland);
// console.log(population <= 33000000);

// let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
// console.log(description);

// const aveDolphins = (96 + 108 + 89) / 3;
// const aveKoalas = (96 + 108 + 89) / 3;
// console.log(aveDolphins, aveKoalas);


// if (aveDolphins > aveKoalas) {
//     console.log('Dolphins winssss...!');
// } else if (aveDolphins === aveKoalas) {
//     console.log('!GAMES DRAW!');
// } else {
//     console.log('Koalas winssss...!');
// }


//bonus 1
// const aveDolphins = (97 + 112 + 80) / 3;
// const aveKoalas = (109 + 95 + 50) / 3;
// console.log(aveDolphins, aveKoalas);


// if (aveDolphins > aveKoalas && aveDolphins >= 100) {
//     console.log('Dolphins winssss...!');
// } else if (aveDolphins === aveKoalas && aveDolphins >= 100 && aveKoalas >= 100) {
//     console.log('!GAMES DRAW! Both wins trophy!!');
// } else if (aveDolphins < aveKoalas && aveKoalas >= 100) {
//     console.log('Koalas winssss...!');
// } else {
//     console.log('No one wins the troophy :(');
// }

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
    bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);