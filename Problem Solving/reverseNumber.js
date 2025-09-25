let num = 123;
let rem;
let sum = 0;
while(num>0){
    rem = num%10;
    sum = sum+rem;
    num = parseInt(num/10);
}
console.log(sum);