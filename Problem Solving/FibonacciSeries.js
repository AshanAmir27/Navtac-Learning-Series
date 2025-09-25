function fibonacci(n) {
    let first = 0, second = 1, next;
    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            next = i;
        } else {
            next = first + second;
            first = second;
            second = next;
        }
        console.log(next);
    }
}

fibonacci(5);