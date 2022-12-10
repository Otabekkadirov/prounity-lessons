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
// holiday = true;
// if (holiday) {
//     console.log("Bugun dam olamiz! URAA!");
// } else {
//     console.log("Dam olish yo'q, dars qilish kerak!");
// }
//

// ================================================ //
// 3.   if block i dan keyin bir nechta else if block
//      qo'shishimiz mumkin. Bunda qaysi birida true
//      qiymat bo'lsa, o'sha block ishlaydi.
// ================================================ //
// let age = 16;
// if (age > 16) {
//     console.log("Siz pasport olgansiz");
// } else if (age == 16) {
//     console.log("Siz pasport olish yoshidasiz.");
// } else {
//     console.log("Siz endi pasport olasiz.");
// }
//

// ================================================ //
// 4.   Boolean dan boshqa ma'lumot turlari ham
//      true/false qiymatga ega bo'ladi.
//
//      false ==> false, 0, "", null, undefined, NaN
//      true  ==> boshqa har qanday qiymat
// ================================================ //
// let olmalar = 0;
// if (olmalar) {
//     console.log("Kelinglar, olma yeymiz.");
// } else {
//     console.log("Olma qolmapti.");
// }
//

// ================================================ //
// 5.   Mantiqiy operatorlar:
//      ||      ==> yoki
//      &&      ==> va
//      !       ==> emas
// ================================================ //
// 1)
// let hour = 8;
// if (hour < 10 || hour > 18) {
//     console.log("Markaz yopiq.");
// } else {
//     console.log("Markaz ochiq.");
// }
// 2)
// let hour = 8;
// let emergency = true;
// if ((hour < 10 || hour > 18) && emergency) {
//     console.log("Markaz yopiq.");
// } else {
//     console.log("Markaz ochiq.");
// }
//

// ================================================ //
// 6.   Mantiqiy operatorlardan || (yoki) o'zgaruvchiga
//      ma'lumot saqlashda ham ishlatiladi.
// ================================================ //
// 1)
// let visitor = "";
// let user;
// if (visitor) {
//     user = visitor;
// } else {
//     user = "foydalanuvchi";
// }
// console.log(`Salom ${user}!`);
// 2)
// let visitor = "";
// let user = visitor || "foydalanuvchi";
// console.log(`Salom ${user}!`);
//

// ================================================= //
// 7.   Ternary operatorlar if/else gaplarning
//      qisqa ko'rinishidir.

//      condition ? true : false;
// ================================================= //
// let holiday = true;
// if (holiday) {
//     console.log("Bugun dam olamiz! URAA!");
// } else {
//     console.log("Dam olish yo'q, dars qilish kerak!");
// }
// let holiday = true;
// holiday
//     ? console.log("Bugun dam olamiz! URAA!")
//     : console.log("Dam olish yo'q, dars qilish kerak!");
