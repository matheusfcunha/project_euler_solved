sumOf3 = 0;
sumOf5 = 0;
matchMultiples = 0;

for (x = 1; x < 1000; x++) {
    mod3 = x % 3;
    mod5 = x % 5;
    if (mod3 === 0) {
        sumOf3 = sumOf3 + x;
        if (mod5 === 0) { // using an if inside another, i got the match numbers from the multples
            matchMultiples = matchMultiples + x;
        }
    }
    if (mod5 === 0) {
        sumOf5 = sumOf5 + x;

    }

    result = sumOf3 + sumOf5 - matchMultiples;
}

console.log("sum > multiples of 3: " + sumOf3);
console.log("sum > multiples of 5: " + sumOf5);
console.log("sum > multiples of 3 and 5 that match in the sequence: " + matchMultiples);
console.log("sum > multiples of 3 and 5 minus matches: " + result);
