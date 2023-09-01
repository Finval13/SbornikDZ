"strict";

// Перше

// const sered = function () {
//   let recen = prompt("Введіть речення");
//   rc = +recen.slice().split(" ").join("").length;
//   rc2 = +recen.split(" ").length;
//   rez = rc / rc2;
//   console.log(`Стільки букв ${rc}`);
//   console.log(`Стільки слів ${rc2} `);
//   console.log(`Середня довжина слова ${rez}`);
// };

// sered();

// Друге

// const simvol = function () {
//   let rez = [];
//   let riadok = prompt("Введіть рядок і символ");
//   let simvoll = "!";
//   let rrd = riadok.split("").indexOf(simvoll);
//   while (rrd != -1) {
//     rez.push(rrd);
//     rrd = riadok.indexOf(simvoll, rrd + 1);
//   }
//   console.log(rez);
// };

// simvol();

// Третє

// Четверте

// const adressa = function () {
//   let str = prompt("Введіть URL");

//   if (str === null || str === undefined || str === "") {
//     console.log("Ви нічого не ввели:(");
//   } else {
//     let arr = str.split("/");
//     console.log("Протокол:" + arr[0]);
//     console.log("Домен:" + arr[2]);
//     console.log("Шлях:" + arr[3]);
//   }
// };

// adressa();

// П'яте

// const datacom = function () {
//   let str = prompt("Введіть дату дд/мм/рррр");

//   if (str === null || str === undefined || str === String) {
//     console.log("Ви нічого не ввели,або ввели не правильно");
//   } else {
//     let arr = str.split("/");
//     console.log(arr.join(","));
//   }
// };

// datacom();

// Шосте

// let p = [
//   {
//     name: "Хліб",
//     count: 1,
//     price: 15,
//   },
//   {
//     name: "Намазка",
//     count: 1,
//     price: 17,
//   },
//   {
//     name: "Сало",
//     count: 2,
//     price: 100,
//   },
//   {
//     name: "Кілька",
//     count: 2,
//     price: 35,
//   },
// ];

// const summa = function (check) {
//   let summa = 0;

//   for (i = 0; i < check.length; i++) {
//     summa = summa + check[i].count * check[i].price;
//   }
//   return summa;
// };

// const sered = function (check) {
//   let seredne = 0;
//   for (i = 0; i < check.length; i++) {
//     seredne = seredne + check[i].count;
//   }
//   return seredne;
// };

// const doroge = function (check) {
//   let dorogg = check[0].price;
//   for (i = 0; i < check.length; i++) {
//     if (check[i].price > dorogg) {
//       dorogg = check[i].price;
//     }
//   }
//   return dorogg;
// };

// console.log(p);
// console.log("Середня сума чеку: " + summa(p) / sered(p) + " грн");
// console.log("Загальна сума покупки: " + summa(p) + " грн");
// console.log("Найдорожча покупка у чеку: " + doroge(p) + " грн");

const ones = ["", "один", "два", "три", "чотири", "п`ять", "шість", "сім", "вісім", "дев`ять"];
const tens = [
  "",
  "",
  "двадцять",
  "тридцять",
  "сорок",
  "п`ятьдесят",
  "шістьдесят",
  "сімдесят",
  "вісімдесят",
  "дев'яносто",
];
const teens = [
  "десять",
  "одинадцять",
  "дванадцять",
  "тринадцять",
  "чотирнадцять",
  "п`ятнадцять",
  "шістнадцять",
  "сімнадцять",
  "вісімнадцять",
  "дев`ятнадцять",
];

let sum = prompt("Введіть число");

const slov = function (a) {
  if (sum < 10) {
    alert(ones[sum]);
  } else if (sum >= 10 && sum < 20) {
    alert(teens[sum[1]]);
  } else if (sum >= 20 && sum < 100) {
    alert(tens[sum[0]] + " " + ones[sum[1]]);
  } else {
    alert("Не корректні данні");
  }
};

slov(sum);
