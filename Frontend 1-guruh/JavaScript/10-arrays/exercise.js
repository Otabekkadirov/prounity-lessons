// let students = [
//     "Abdulaziz", // students[0][0] => A
//     "Javohir", // students[1][0] => J manashu ismni yangi ro'yxatga sol
//     "Alisher",
//     "Mansur",
//     "Jahongir",
//     "Dilshod",
//     "Jasur",
// ];

// function getNames(array, letter) {
//     // letter = letter.toLowerCase();
//     letter = letter.toUpperCase();

//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][0] == letter) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// console.table(getNames(students, "J"));
// console.table(getNames(students, "D"));
// console.table(getNames(students, "A"));
// console.table(getNames(students, "m"));

// bigLetters("otabek") => "OTABEK"

// function bigLetters(name) {
//     let newName = "";

//     for (let harf = 0; harf < name.length; harf++) {
//         if (harf == 0) {
//             newName += name[harf].toUpperCase();
//         } else {
//             newName += name[harf].toLowerCase();
//         }
//     }

//     return newName;
// }

// console.log(bigLetters("inoyat"));
// console.log(bigLetters("iNoYaTbEk"));
// console.log(bigLetters("o'ZbEkIsToN"));

// multiSum([1,2,3,4]) => 1*2*3*4 = 24
// multiSum([1,1]) => 1*1 = 1
// multiSum([2,4,5]) => 2*4*5 = 40

// function multiSum(array) {
//     let result = 1;

//     for (let i = 0; i < array.length; i++) {
//         result = result * array[i];
//     }

//     return result;
// }

// console.log(multiSum(numbers)); // 1 * 3 * 5 * 7 = 105

// invertNumber(number) => invert number

// invertNumber(3) => -3
// invertNumber(17) => -17
// invertNumber(-9) => 9
// invertNumber(-64) => 64

function invertNumber(number) {
    return -number;
}

function invert(massiv) {
    for (let i = 0; i < massiv.length; i++) {
        massiv[i] = invertNumber(massiv[i]);
    }

    return massiv;
}

let numbers = [1, 3, 5, -7, 9, -11, -13];

console.log(invert(numbers));
