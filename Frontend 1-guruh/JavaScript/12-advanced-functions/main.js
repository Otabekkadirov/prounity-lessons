// function greet() {
//     return "Hello Mars!";
// }

// let hello = greet;

// console.log(greet());
// console.log(hello());

// function greet() {
//     console.log("Hello world!");
// }

// setTimeout(greet, 5000);

const friends = [
    "Muhriddin",
    "Javohir",
    "Sherzod",
    "Muhammad",
    "Amirshox",
    "Shoxrux",
    "Bexruz",
    "Firdavs",
    "Jasur",
    "Begzod",
    "Aziz",
    "Humoyun",
];
function hasLetter(name, letter) {
    name = name.toLowerCase();
    letter = letter.toLowerCase();
    for (let i = 0; i < name.length; i++) {
        if (name[i] === letter) {
            return true;
        }
    }
    return false;
}
function filter(arr, letter) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (hasLetter(arr[i], letter)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filter(friends, "e"));

// function filter(arr, letter) {
//     letter = letter.toLowerCase()
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].toLowerCase()
//         // if (arr[i][0] === letter) {
//         //     newArr.push(arr[i]);
//         // }
//     }
//     return newArr;
// }

// console.log(filter(friends, "B"));
