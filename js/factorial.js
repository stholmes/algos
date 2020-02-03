function factorial(n) {
    var total = 1
    for (var i = 1; i <= n; i++) {
        total *= i
    }
    return total;
}

//console.log(factorial(3))

function factorialRecursive(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1)
}

//console.log(factorialRecursive(10))