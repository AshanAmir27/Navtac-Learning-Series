let num = Number(prompt("Enter a number:"));
let sum = 0;

while (num > 0) {
  sum += num % 10;   // get last digit
  num = Math.floor(num / 10); // remove last digit
}

console.log("The sum of digits is:", sum);

// let num = Number(prompt("Enter a number:"));
// let sum = 0;
// while (num > 0) {
//   sum += num % 10;
//     num = Math.floor(num / 10);
// }
// console.log("The sum of digits is:", sum);


// let num = Number(prompt("Enter a number:"));
// let reverseNum = 0;
// while(num>0){
//     reverseNum = reverseNum * 10 + num % 10;
//     num = Math.floor(num / 10);
// }

// console.log("The sum of digits is:", reverseNum);

// numbber = 1234
// first iteration =  


// let num = parseInt(prompt("Enter a number:"));
// let sum = 0;
// for(let i=0;i<=num;i++){
//     sum += i;
// }
// console.log("The sum of digits is:", sum);


// let num = 5;
// let factorial = 1;

// for(let i=num;i>=0;i++){
//     factorial *= i;

// }

// console.log(factorial)