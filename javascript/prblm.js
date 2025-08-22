let n = input.split(" ").map(Number);
let n1 = n[0];
let n2 = n[1];

console.log("Before swapping: num1 = " + n1 + ", num2 = " + n2);
let t = n1;
n1 = n2;
n2 = t;

console.log("After swapping: num1 = " + n1 + ", num2 = " + n2);