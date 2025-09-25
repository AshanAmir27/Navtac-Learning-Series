let num = 3;
let isPrime = true;

if (num <= 1) {
    console.log("Invalid Number");
} else {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Prime Number");
    } else {
        console.log("Not a Prime Number");
    }
}
