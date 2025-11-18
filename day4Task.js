// Part: 1 - let, var, const & scope Output Based Qns
//1
var a = 10;
let b = 20;
const c = 30;
console.log(a, b, c); //10 20 30

//2
var x = 5;
var x = 10;
console.log(x); //10

//3
let y = 5;
y = 10;
console.log(y); //10

//4
const z = 5;
z = 10;
console.log(z); //TypeError: Assignment to constant variable

//5
{
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a); //1
console.log(b); //ReferenceError

//6
for (var i = 0; i < 3; i++) {}
console.log(i); //3

//7
for (let j = 0; j < 3; j++) {}
console.log(j); //ReferenceError

//8
console.log(a); //Undefined
var a = 10;

//9
console.log(b); //ReferenceError
let b = 10;

//10
const person = { name: "Noor" };
person.name = "Jahan";
console.log(person.name); //Jahan

// Part: 2 - Operators
console.log(5 + "5"); //55 type: String
console.log("5" - 2); //3 type: Number

console.log(5 == "5"); //true
console.log(5 === "5"); //false

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(true && false); //false
console.log(true || false); //true

console.log(5 > 3 ? "Yes" : "No"); //Yes

let a = null ?? "Default";
console.log(a); //default

let a = 0 ?? 5;
console.log(a); //0

console.log(5 & 3); //1

let x = 5;
x += 3;
console.log(x); //8
