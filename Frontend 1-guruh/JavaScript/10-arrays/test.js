// Arrays

// countString("Buxoro") ==> 6
// countString("Hello") ==> 5

// function countString(text) {
//     let count = text.length;

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == " ") {
//             count--;
//         }
//     }

//     return count;
// }

// console.log(countString("Aziz "));

// function reverse(text) {
//     let teskari = "";

//     for (let harf = text.length - 1; harf >= 0; harf--) {
//         teskari += text[harf];
//     }

//     return teskari;
// }

// console.log(reverse("Nilufar"));
// console.log(reverse("Bexruz"));

// multiply(1, 5) ==> 1 + 2 + 3 + 4 + 5 = 15
// multiply(3, 4) ==> 3 + 4 = 7
// multiply(30, 40) ==> 30 + 31 + 32 + .... = ??

// function min(a, b) {
//     return a > b ? b : a;
// }

// function max(a, b) {
//     return a > b ? a : b;
// }

// function multiply(x, y) {
//     let smallNum = min(x, y);
//     let bigNum = max(x, y);

//     let num = 0;

//     for (let i = smallNum; i <= bigNum; i++) {
//         num += i;
//     }
//     return num;
// }

// const min = (a, b) => (a > b ? b : a); // bu kichigini qaytaradi
// const max = (a, b) => (a > b ? a : b); // bu kattasini qaytaradi

// const multiply = (x, y) => {
//     let smallNum = min(x, y);
//     let bigNum = max(x, y);

//     let num = 0;

//     for (let i = smallNum; i <= bigNum; i++) {
//         num += i;
//     }
//     return num;
// };

// console.log(multiply(8, 1));

// lastNumber(12312412) => 2
// lastNumber(4001) => 1
// lastNumber(2023) => 3

// function lastNumber(num) {
//     return num % 10;
// }

// console.log(lastNumber(4001));

// function reversedNum(num) {
//     let reversed = 0;

//     // while (num) {
//     //     let lastNum = num % 10;
//     //     reverse = (reverse + lastNum) * 10;
//     //     num = Math.floor(num / 10);
//     // }

//     while (num) {
//         reversed = reversed * 10 + (num % 10);
//         num = Math.floor(num / 10);
//     }

//     return reversed;
// }

// console.log(reversedNum(34567));
