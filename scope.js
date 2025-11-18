// MCQS
// 1:c 2:b 3:b 4:d 5:d 6:b 7:d 8:a 9:a 10:d

//Output Based
// 1
console.log(a); // undefined
var a = 10;

// 2
console.log(b); // Reference Error
let b = 20;

// 3
{
  var x = 5;
  let y = 10;
}
console.log(x); // 5
console.log(y); // Reference Error

// 4
function test() {
  {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a); // 1
  console.log(b); // Reference Error
  console.log(c); // Reference Error
}
test();

// 5
{
  a = 10;
}
console.log(a); // 10 js creates global variable

//6
x = 10;
function x() {}
console.log(x); // 10 Here first function is hoisted this creates global variable x pointing to function later function is overwritten by 10

//7
var a = 10;
{
  var a = 20;
  let b = 30;
  console.log(a, b); // 20, 30
}
console.log(a); // 20

//8
const num = 5;
num = 10;
console.log(num); // Type Error assignment to constant variable

//9
const person = { name: "John" };
person.name = "Alice";
console.log(person); // Alice

//10
let x = 100;
function demo() {
  console.log(x); // Cannot access x before initialization
  let x = 200;
}
demo();
