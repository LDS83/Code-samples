function nthFibonacci(n, indexing = "zero") {
    // Code to handle 0 based indexing:
    if (indexing === "zero") {
        if (n === 0) return 0;
        if (n === 1) return 1;
    }

    // Code to handle 1 - based indexing:
    if (indexing === "one") {
        if (n === 1) return 0;
        if (n === 2) return 1;

        n = n - 1;

        // Convert 1 - based index to 0 based index for the loop.
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }

    return b;


    

}

console.log(nthFibonacci(9));// Zero based indexing // Output : 34
console.log(nthFibonacci(9, "one"))// 1 based indexing // Output 21