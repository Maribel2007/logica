let strings = [];
let numbers = [];
const arr = [
  "Kairi",
  24,
  "Henrik",
  35,
  8,
  102,
  "Makenna",
  "Armani",
  7,
  "Zole",
  64,
  2,
  4,
  "Nathanael",
  "Elina",
  5,
  "Grady",
  32,
  1,
  "Cora",
  23,
  "Jayce",
  5,
  "Mya",
  55,
  "Bjorn",
  40,
];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    numbers.push(arr[i]);
  } else if (typeof arr[i] === "string") {
    strings.push(arr[i]);
  }
}
console.log(numbers, numbers.length);
console.log(strings, strings.length);

//for (let num of arr){
//console.log(num)
//}
//console.log(soma)
