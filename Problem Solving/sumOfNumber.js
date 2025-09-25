let num = prompt("Enter a number:"); // 123
let sum = 0; // 3
while (num > 0) {
  sum += num % 10; //get last digit
  num = Math.floor(num / 10); //remove last digit
}
console.log("The sum of digits is:", sum);