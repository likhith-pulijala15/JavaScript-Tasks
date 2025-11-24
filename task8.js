//MCQS
// 1:D 2:B 3:C 4:C 5:B 6:A 7:C 8:C 9:B 10:C

//Output Based
//1
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

//2
console.log(sum(2, 3));
function sum(a, b) {
  return a + b;
}

//3
console.log(fun);
let fun = function () {
  return "Hello";
};

//4
let x = () => 10;
console.log(x());

//5
let greet = function () {
  return "Hi";
};
console.log(greet());

//6
(function () {
  console.log("IIFE");
})();

//7
let obj = {
  name: "John",
  getName: () => this.name,
};
console.log(obj.getName());

//8
let x = function (a, b) {
  return a * b;
};
console.log(typeof x);

//9
let print = () => ({ x: 10 });
console.log(print());

//10
(() => console.log("Executed"))();
