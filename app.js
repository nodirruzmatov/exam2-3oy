// ! 1 masala ----------------------------------------------------------
//! masala toliq yechim topmadi

// const numbers = [];

// const numOne = numbers.push(prompt("birinchi sonni kiriting") * 1);
// const numTwo = numbers.push(prompt("ikkinchi sonni kiriting") * 1);
// const numthree = numbers.push(prompt("uchinchi sonni kiriting") * 1);
// const numFour = numbers.push(prompt("to'rtinchi sonni kiriting") * 1);
// const numFive = numbers.push(prompt("beshinchi sonni kiriting") * 1);

// let calcNum = 0;

// for (let i = 0; i <= numbers.length - 1; i++) {
//   calcNum += numbers[i];
// }

// console.log(typeof calcNum);

// switch (typeof calcNum) {
//   case "number":
//     console.log(calcNum);
//     break;

//   case NaN:
//     console.log(`siz son kiritmadingiz`);
//     break;
// }

// ! 2 masala -----------------------------------------------------------

const nimadur = ["Jazz", "Blues"];
console.log(nimadur);

nimadur.push("Rock-n-roll");
console.log(nimadur);

nimadur.pop();
nimadur.pop();
nimadur.push("Classic");
nimadur.push("Rock-n-roll");
console.log(nimadur);

nimadur.unshift("Reggae");
nimadur.unshift("Rap");
console.log(nimadur);

// !3 masala --------------------------------------------------------
// let salaries = {
//   Akmal: 1200,
//   Salim: 5200,
//   Karima: 1800,
//   Nodir: 10000,
// };

// console.log(Object.values(salaries));

// let sumSalaries = 0;

// for (let i of Object.values(salaries)) {
//   sumSalaries += i;
// }

// console.log(sumSalaries);
// ! 4 masala ----------------------------------------------------------------
// const numbers = [
//   1,
//   2,
//   3,
//   5,
//   "kim zor bola ",
//   9,
//   6,
//   4,
//   5,
//   "nodir",
//   15,
//   12,
//   " zor bola",
// ];

// console.log(numbers);

// let jami = [0, 0, ""];

// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] % 2 === 0) {
//     jami[0] += numbers[i];
//   } else if (numbers[i] % 2 === 1) {
//     jami[1] += numbers[i];
//   } else {
//     jami[2] += numbers[i];
//   }
// }

// console.log(jami);

// ! 5 masala ------------------------------------------
// const numbers = [-3, -2, 1, 5, 6, 9, -5];

// const anothers = [];

// for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
//   if (!numbers.includes(i)) {
//     anothers.push(i);
//   }
// }

// console.log(anothers);
