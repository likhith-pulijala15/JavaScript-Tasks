// ---------- Part: 1 -------------
//1
function test() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); //20
  }
  console.log(x); //20
}
test();

//2
function example() {
  let y = 5;
  if (true) {
    let y = 10;
    console.log(y); //10
  }
  console.log(y); //5
}
example();

//3
function run() {
  if (true) {
    var a = 100;
    let b = 200;
    const c = 300;
  }
  console.log(a); //100
  console.log(typeof b); //Undefined
}
run();

//4
var x = 1;
function outer() {
  console.log(x); //undefined
  var x = 2;
}
outer();

//5
let x = 10;
{
  let x = 20;
  {
    let x = 30;
    console.log(x); //30
  }
  console.log(x); //20
}
console.log(x); //10

//6
{
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a); //1
console.log(typeof b); //Undefined
console.log(typeof c); //Undefined

//7
for (var i = 0; i < 3; i++) {}
console.log(i); //3

for (let j = 0; j < 3; j++) {}
console.log(typeof j); //Undefined

//8
function demo() {
  console.log(a); //Undefined
  var a = 50;
  console.log(a); //50
}
demo();

//9
function blockTest() {
  const value = 5;
  if (true) {
    const value = 10;
    console.log(value); //10
  }
  console.log(value); //5
}
blockTest();

//10
function testScope() {
  if (true) {
    var x = "var inside";
    let y = "let inside";
  }
  console.log(x); //var inside
  console.log(typeof y); //Undefined
}
testScope();

// ------------ Part: 2 ------------
//1
marks = 80;
if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else if (marks >= 40) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//2
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

//3
let ch = "div";
switch (ch) {
  case "add":
    function add(a, b) {
      console.log(a + b);
    }
    add(10, 20);
    break;

  case "sub":
    function sub(a, b) {
      console.log(a - b);
    }
    sub(20, 5);
    break;

  case "mul":
    function mul(a, b) {
      console.log(a * b);
    }
    mul(10, 2);
    break;

  case "div":
    function div(a, b) {
      console.log(a / b);
    }
    div(20, 10);
    break;
}

//4
let age = 20;
if (age < 13) {
  console.log("Child");
} else if (age >= 13) {
  if (age < 20) {
    console.log("Teen");
  } else if (age < 60) {
    console.log("Adult");
  } else {
    console.log("Senior");
  }
}

//5
let light = "green";
switch (light) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("wait");
    break;
  case "green":
    console.log("Go");
    break;
}

// -------------- Part: 3 ---------------
// 1
let a = 0;
if (a) console.log("Truthy");
else console.log("Falsy"); //fasly

//2
let value = null ?? "default";
console.log(value); //default

//3
let x;
let y = x ?? 10;
console.log(y); //10

//4
let name = "";
console.log(name || "Guest"); //Guest
console.log(name ?? "Guest"); //empty space

//5
let n = NaN;
if (n) console.log("True");
else console.log("False"); //False

//6
let choice = 2;
switch (choice) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two"); //Two
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Other");
}

//7
let userInput = undefined;
let result = userInput ?? "No Value";
console.log(result); //No value

//8
let num = "5";
if (num == 5) console.log("== works"); //==works
if (num === 5) console.log("=== works");

//9
let test = 0 || "fallback";
let check = 0 ?? "fallback";
console.log(test, check); //fallback, 0

//10
let score = null;
if (score ?? 0 > 50) console.log("Passed");
else console.log("Failed"); //failed
