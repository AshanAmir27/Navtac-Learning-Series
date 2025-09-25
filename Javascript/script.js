// let number = 321;

// function reverseNumber(number) {
//     let reverse = 0;
//     let isNegative = number < 0;
//     number = Math.abs(number);
//     while(number>0){
//         let digit = number%10;
//         reverse = reverse*10 + digit;
//         number = Math.floor(number/10);
//     }
//     return isNegative ? -reverse : reverse;
// }

// function reverseString(str) {
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let reverse = str.split().reverse().join();
//     return str===reverse;
// }


// // palindrome

// let number1 = 121;
// function isPalindrome(number) {
//     if (number < 0) return false;
//     let reverseOuput = reverseNumber(number);
//     return reverseOuput === number;
// }

// console.log(isPalindrome(number1));
// let string = 'fdfalj';
// function isPalindromeString(string) {
    
//     let reverseOuput = reverseString(string);
//     return reverseOuput 
// }

// console.log(isPalindromeString(string));


// maximumn in array
let arr = [1,2,3,4,5,6,7,8,9];
let max = arr[0]
let min = arr[0]
for(let i =0 ; i<arr.length; i++){
    if(arr[i]> max){
        max =arr[i];
    }else if (arr[i]<min){
        min = arr[i];
    }
}

console.log("max", max);
console.log("min", min);


(function sayHello(){
    console.log("hello");
})();

