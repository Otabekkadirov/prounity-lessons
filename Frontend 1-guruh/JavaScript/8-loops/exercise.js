// === === === === === === === === === === === === === ||
//      1.
//      Looplardan foydalanib, 1 dan 100 gacha bo'lgan
//      toq sonlarni console ga chiqaring.
//
// === === === === === === === === === === === === === ||

// for (let son = 1; son <= 100; son += 2) {
//     console.log(son);
// }

// let son = 1;
// while (son <= 10) {
//     console.log(son);
//     console.log(son * 1);
//     son = son + 2;
// }

// let son = 1;

// do {
//     console.log(son);
//     son = son + 2;
// } while (son <= 100);

//

// === === === === === === === === === === === === === ||
//      2.
//      Looplardan foydalanib, 100 dan 1 gacha bo'lgan
//      juft sonlarni console ga chiqaring.
//
// === === === === === === === === === === === === === ||

//

// for (let son = 10; son >= 1; son -= 2) {
//     console.log(son);
// }

// let son = 100;
// while (son) {
//     console.log(son);
//     son -= 2;
// }

//

// === === === === === === === === === === === === === ||
//      3.
//      Looplardan foydalanib, 100 dan 1 gacha bo'lgan
//      juft sonlarni console ga chiqaring.
//
// === === === === === === === === === === === === === ||

//

// === === === === === === === === === === === === === ||
//      4.
//      Looplardan foydalanib, quyidagi ko'rinishni
//      console ga chiqaring:
//      10
//      109
//      1098
//      10987
//      109876
//      1098765
//      10987654
//      109876543
//      1098765432
//      10987654321
//
// === === === === === === === === === === === === === ||

//

// let result = "";
// for (let i = 10; i >= 1; i -= 1) {
//     result = result + i;
//     console.log(result);
// }

// === === === === === === === === === === === === === ||
//      5.
//      Ichma-ich looplardan foydalanib, quyidagi
//      ko'rinishni console ga chiqaring:
//      1 1
//      1 2
//      1 3
//      2 1
//      2 2
//      2 3
//      3 1
//      3 2
//      3 3
//
// === === === === === === === === === === === === === ||

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         for (let k = 1; k <= 3; k++) {
//             for (let b = 1; b <= 3; b++) {
//                 console.log(i, j, k, b);
//             }
//         }
//     }
// }

// 1 1
// 1 2
// 1 3
// 1 4
// 2 1
// 2 2
// 2 3
// 2 4
// 3 1
// 3 2
// 3 3
// 3 4
// 4 1
// 4 2
// 4 3
// 4 4

for (let i = 5; i <= 11; i++) {
    if (i === 6 || i === 9) {
        console.log(`${i}-a`);
        console.log(`${i}-b`);
        console.log(`${i}-v\n`);
    } else {
        console.log(`${i}-a`);
        console.log(`${i}-b\n`);
    }
}

for (let i = 1; i <= 8; i++) {
    let result = "";

    for (let j = 1; j <= 8; j++) {
        if (i + j <= 8) {
            result += " ";
        } else {
            result += "#";
        }
    }
    console.log(result);
}
