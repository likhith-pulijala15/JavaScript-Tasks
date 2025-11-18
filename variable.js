// var
// Can be redeclared
// Can be updated
// Has function scope (NOT block scope)
// If used inside {}, it escapes the block behaves like global (or function scoped)

var Name = "Likith";
var Name = "Maheshwar";
Name = "Mahoday";
console.log(Name);

//let
// Can be updated
// Cannot be redeclared in the same scope
// Has block scope {}
// Cannot be accessed outside the block
let age = 18;
age = 20;
console.log(age);

// const
// Cannot be updated
// Cannot be redeclared
// Block scoped {}
// Must be assigned a value immediately
const city = "hyd";
console.log(city);
