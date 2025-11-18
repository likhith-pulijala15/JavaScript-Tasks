// Part: 1

// 1. Create variables and print
var Name = "Likith";
let Age = 18;
const City = "Hyderabad";
console.log(Name, Age, City);

// 2. Try to reassign values
Name = "Maheshwar";
age = 22;
city = "Suryapet"; // Throws TypeError as we cannot reassign to const variable

// 3. Accessing outside block
{
  let marks = 95;
  var grade = "A";
}
console.log(marks); // ReferenceError let can only be accessed within block
console.log(grade);

// 4. var inside function
function greet() {
  var wish = "Good Morning";
}
console.log(wish); // Gives ReferenceError when var is used inside a function it becomes function scoped

// Part: 2
let Name = "Likith";
let age = 22;
let isPass = true;
let backlog = null;
var city;
let person = { name: "likith", age: 22 };
const numbers = [1, 2, 3, 4];
let id = Symbol("uniqueId");
let bigNumber = 1233142343534524525n;

console.log(`
    Name: ${typeof Name}
    Age: ${typeof age}
    isPass: ${typeof isPass}
    backlog: ${typeof backlog}
    city: ${typeof city}
    person: ${typeof person}
    num: ${typeof numbers}
    id: ${typeof id}
    bigNumber: ${typeof bigNumber}
    `);

// Part: 3 MCQs
// 1:C 2:B 3:C 4:C 5:C 6:C 7:B 8:C 9:C 10:D

// Output Based Questions
//1
var x = 10;
let y = 20;
const z = 30;
x = 25;
y = 25;
z = 35;
console.log(x, y, z);
// Option: C

//2
var a = 5;
var a = 10;
console.log(a);
// Option: B

//3
let a = 5;
let a = 10;
console.log(a);
// Option: C

//4
{
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a);
console.log(b);
console.log(c);
// Option: C

//5
console.log(a);
var a = 10;
// Option: B

//6
console.log(b);
let b = 10;
// Option: C

//7
function test() {
  if (true) {
    var x = 100;
    let y = 200;
  }
  console.log(x);
  console.log(y);
}
test();
// Option: B

//8
const num;
num = 50;
console.log(num);
// Option: C

//9
var x = 1;
let y = 2;
{
  var x = 10;
  let y = 20;
  console.log(x, y);
}
console.log(x, y);
// Option: B

//10
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// Option: B