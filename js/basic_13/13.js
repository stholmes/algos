//Print to n
function print(n) {
    for (var i = 0; i <= n; i++) {
        console.log(i);
    }
}

function printRecursive(n, i = 0) {
    if (i > n) {
        return;
    }
    console.log(i);
    printRecursive(n, i += 1);
}

// print(255);
// printRecursive(255);

//Ints and Sum
function printSum(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
        console.log(`Number: ${i}, sum: ${sum}`)

    }
}

// printSum(255)

function printSumRecursive(n, i = 0, sum = 0) {
    if (i > n) {
        return;
    }
    console.log(`Number: ${i}, sum: ${sum}`)
    printSumRecursive(n, i += 1, sum += i)
}

// printSumRecursive(255)

//Print Max of Array
function ArrayMax(arr) {
    if (arr.length == 0) {
        return 'Array is empty'
    };
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {

        if (max < arr[i]) {

            max = arr[i]
        }
        console.log(arr[i], max)
    }

    return max;
}

// var test = [-10, -1, -5, -9, -99];
// var max = ArrayMax(test);

function ArrayMaxRecursive(arr, i = 0, max = 0) {
    if (arr.length == 0) {
        return 'Array is empty'
    };
    if (i == arr.length) {
        return max;
    };
    if (i == 0) {
        max = arr[0]
    };
    if (max < arr[i]) {
        max = arr[i]
    };
    return ArrayMaxRecursive(arr, i += 1, max = max);
}

var test = [1, 10, 10000, 100]
var max = ArrayMaxRecursive(test);
console.log(max)