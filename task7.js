// MCQS
// 1:D 2:C 3:C 4:C 5:B 6:B 7:B 8:B 9:C 10:D
// 11:B 12:D 13:B 14:C 15:B 16:D 17:B 18:C 19:A 20:A

// --------- Output Based --------

//1
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

//2
let i = 3;
do {
  console.log(i);
  i--;
} while (i > 3);

//3
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}

//4
for (let x in [10, 20, 30]) {
  console.log(x);
}

//5
for (let x of "hi") {
  console.log(x);
}

//6
let a = [5, 6, 7];
a.prop = 100;
for (let i in a) console.log(i);

//7
let a = [5, 6, 7];
a.prop = 100;
for (let v of a) console.log(v);

//8
let i = 0;
while (i < 3) {
  if (i === 1) break;
  console.log(i);
  i++;
}

//9
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

//10
for (var i = 0; i < 3; i++) {}
console.log(i);

//11
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    if (j === 1) continue;
    console.log(i, j);
  }
}

//12
for (let i = 1; i <= 3; i++) {
  if (i === 2) continue;
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}

//13
let count = 1;
while (count <= 3) {
  console.log(count * 2);
  count++;
}

//14
let x = 1;
do {
  console.log(x);
  x += 2;
} while (x < 6);

//15
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === j) break;
    console.log(i, j);
  }
}
