// swaping with third variable
let num1 = 2;
let num2 = 3;

console.log("Before Swap: num1 =", num1, "num2 =", num2);
let temp = num1;
let swapnum1 = num2;
let swapnum2 = temp;
console.log("After Swap: num1 =", swapnum1, "num2 =", swapnum2);

// swaping without third variable
console.log("Without third variable");
let num3 = 2;
let num4 = 3;

console.log("Before Swap: num3 =", num3, "num4 =", num4);
 num3 = num3+num4;// num3= 5+4 =9
 num4 = num3-num4;// num4= 9-4 =5
 num3 = num3-num4;// num3= 9-5 =4
console.log("After Swap: num3 =", num3, "num4 =", num4);

// using destructuring assignment
console.log("Using destructuring assignment");
let num5 = 2;
let num6 = 3;
console.log("Before Swap: num5 =", num5, "num6 =", num6);
[num5, num6] = [num6, num5];
console.log("After Swap: num5 =", num5, "num6 =", num6);