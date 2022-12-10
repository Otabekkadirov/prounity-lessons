// ================================================ //
// 1.   if ning qavslari orasida true qiymat bo'lsa
//      uning block i ichidagi kod ishlaydi.
// ================================================ //
// let holiday = true;
// holiday = false;
// if (holiday) {
//     console.log("Bugun dam olamiz! URAA!");
// }

//

// ================================================ //
// 2.   if ning qavslari orasida false qiymat bo'lsa
//      block ichidagi kod ishlamaydi yoki
//      else block ichidagi kod ishlaydi.
// ================================================ //
// let holiday = true;
// holiday = false;

// if (holiday) {
//     console.log("Bugun dam olamiz! URAA!");
// } else {
//     console.log("Dam olish yo'q, dars qilish kerak!");
// }
//
//

// ================================================ //
// 3.   if block i dan keyin bir nechta else if block
//      qo'shishimiz mumkin. Bunda qaysi birida true
//      qiymat bo'lsa, o'sha block ishlaydi.
// ================================================ //
// let age = 12;
// age += 10;

// if (age > 16) {
//     console.log("Siz pasport olgansiz");
// } else if (age == 16) {
//     console.log("Siz pasport olish yoshidasiz.");
// } else {
//     console.log("Siz endi pasport olasiz.");
// }
//
//

// ================================================ //
// 4.   Boolean dan boshqa ma'lumot turlari ham
//      true/false qiymatga ega bo'ladi.
//
//      false ==> false, 0, "", null, undefined, NaN
//      true  ==> boshqa har qanday qiymat
// ================================================ //
// let olmalar = 0;
// olmalar = -1

// if (olmalar) {
//     console.log("Kelinglar, olma yeymiz.");
// } else {
//     console.log("Olma qolmapti.");
// }
//
//

// ================================================ //
// 5.   Mantiqiy operatorlar:
//      ||      ==> yoki
//      &&      ==> va
//      !       ==> emas
// ================================================ //
// 1)
// let hour = 21;

// if (hour < 10 || hour > 19) {
//     console.log("Markaz yopiq.");
// } else {
//     console.log("Markaz ochiq.");
// }

// 2)
// let hour = 11;
// let emergency = true;
// if (hour < 10 || hour > 18) {
//     console.log("Markaz yopiq.");
// } else if (emergency) {
//     console.log("Markaz yopiq.");
// } else {
//     console.log("Markaz ochiq.");
// }
//

// let hour = 19.5;

// if (hour < 10 || hour > 19) {
//     console.log("Markaz yopiq!");
// } else if (hour >= 13 && hour <= 14) {
//     console.log("Markaz abetda!");
// } else {
//     console.log("Markaz ochiq!");
// }

// let username = "Bekzod";
// let usersurname = "Doniyorov";

// if (username == "Bexruz" && usersurname == "Doniyorov") {
//     console.log("Xush kelibsiz Admin");
// } else {
//     console.log("Kirishga ruxsat yo'q");
// }

// let username = "Mirfayz";

// if (username != "Mirfayz") {
//     console.log("Xush kelibsiz!");
// }

// console.log(!false);

//
//

// ================================================ //
// 6.   Mantiqiy operatorlardan || (yoki) o'zgaruvchiga
//      ma'lumot saqlashda ham ishlatiladi.
// ================================================ //
// 1)
// let visitor = "Nurbek";
// let user;
// if (visitor) {
//     user = visitor;
// } else {
//     user = "foydalanuvchi";
// }
// console.log(`Salom ${user}!`);
// 2)
// let visitor = " ";
// let user = visitor || "foydalanuvchi";
// console.log(`Salom ${user}!`);

// let username = prompt("Ismingiz nima?") || "mehmon";

// console.log("Salom " + username);

//
//

// ================================================= //
// 7.   Ternary operatorlar if/else gaplarning
//      qisqa ko'rinishidir.
//
//      condition ? true : false;
// ================================================= //
// let holiday = true;
// holiday = !true;
// if (holiday) {
//     console.log("Bugun dam olamiz! URAA!");
// } else {
//     console.log("Dam olish yo'q, dars qilish kerak!");
// }

// let holiday = !true;

// holiday ? console.log("Bayram!") : console.log("Dars qil!");

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
