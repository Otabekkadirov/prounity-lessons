// ================================================= //
// 1.   Switch gaplar -- if/else gaplar uchun alternativ
//      sintaksis hisoblanadi. Ularni yozish/o'qish
//      ko'p hollarda qulayroq.
//
//      Kalit so'zlar: --> switch, case, break, default
// ================================================= //
// let season = prompt("Hozir qaysi fasl?");

// if (season == "Autumn") {
//     console.log("Kuz keldi, barglar to'kiladi.");
// } else if (season == "Winter") {
//     console.log("Qish keldi, hammayoq qor!");
// } else if (season == "Spring") {
//     console.log("Oh Bahor, gullar ochildi!");
// } else if (season == "Summer") {
//     console.log("Yoz, o'tmoqda soz!");
// } else {
//     console.log("Bunday faslni bilmayman.");
// }
//

// let season = prompt("Hozir qaysi fasl?");

// switch (season) {
//     case "Spring":
//         console.log("Oh Bahor, gullar ochildi!");
//         break;
//     case "Summer":
//         console.log("Yoz, o'tmoqda soz!");
//         break;
//     case "Autumn":
//         console.log("Kuz keldi, barglar to'lildi.");
//         break;
//     case "Winter":
//         console.log("Qish keldi, hammayoq qor!");
//         break;
//     default:
//         console.log("Bunday faslni bilmayman.");
//         break;
// }

// let olmalar = 0;
// olmalar += 5;

// if (olmalar) {
//     console.log("Kelinglar, olma yeymiz!");
// } else {
//     console.log("Olma qolmapti. Sotib olish kerak.");
// }

// let olmalar = 2;

// switch (olmalar > 0) {
//     case true:
//         console.log("Kelinglar, olma yeymiz.");
//         break;
//     case false:
//         console.log("Olma qolmapti. Sotib olish kerak.");
//         break;
//     default:
//         console.log("Error");
// }

// // console.warn("Hello world");

// // let son = Math.random() * 5;

// // son = Math.round(son);

// // console.log(son);

// console.log(Math.floor(3.999));

let x = prompt("1-ishtirokchi, tosh-qaychi-qog'ozdan birini tanlang!");
let y = prompt("2-ishtirokchi, tosh-qaychi-qog'ozdan birini tanlang!");

console.log("1-ishtirokchida: " + x);
console.log("2-ishtirokchida: " + y);

if (x == "tosh" && y == "qaychi") {
    console.log("1-ishtirokchi yutdi.");
} else if (x == "tosh" && y == "qog'oz") {
    console.log("2-ishtirokchi yutdi.");
}
