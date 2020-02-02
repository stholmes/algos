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

// var test = [1, 10, 10000, 100]
// var max = ArrayMaxRecursive(test);
// console.log(max)

function returnOdds(arr) {
    var oddArr = [];
    for (var i = 1; i <= arr; i += 2) {
        oddArr.push(i)
    };
    return oddArr
}
// console.log(returnOdds(255))
function returnOddsRecursive(num, arr = [], i = 1) {
    if (i == num) {
        arr.push(num);
        return arr;
    }
    arr.push(i);
    return returnOddsRecursive(num, arr, i += 2);
}

function greaterThan(n, arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            count += 1;
            console.log(`${arr[i]}, count: ${count}`)
        }
    }
    return
}

var test = [1, 19, 2, 32, 4, 299, 2839, 67, 3, 8480, 49]
// greaterThan(25, test)

function greaterThanRecursive(n, arr, i = 0, counter = 0) {
    if (arr.length == 0) {
        console.log(`Arry is empty`);
    }
    if (i < arr.length) {
        if (arr[i] > n) {
            counter += 1;
            console.log(`${arr[i]}, count: ${counter}`)
        }
        return greaterThanRecursive(n, arr, i += 1, counter);
    }
    return
}

// greaterThanRecursive(700, test)

function minMaxAvg(arr) {
    if (arr.length == 0) {
        return `No min, max or average values`
    }
    var [min, max, count, sum] = [arr[0], arr[0], 0, 0]

    for (let i = 0; i < arr.length; i++) {
        count += 1
        sum += arr[i]
        if (min > arr[i]) {
            min = arr[i]
        } else if (max < arr[i]) {
            max = arr[i]
        }
    }
    return `max: ${max}, min: ${min}, average: ${sum/count}`

}

console.log(minMaxAvg([1, 2, 3, 3, 3, 3]));

function minMaxAvgRecursive(arr, i = 0, min = 0, max = 0, sum = 0) {
    if (arr.length == 0) {
        return `No min, max or average values`;
    }
    if (i == arr.length) {
        return `max: ${max}, min: ${min}, average: ${sum/(i)}`;
    }
    if (i == 0) {
        min = arr[0];
        max = arr[0];
    };
    if (min > arr[i]) {
        min = arr[i]
    } else if (max < arr[i]) {
        max = arr[i];
    }
    sum += arr[i]
    return minMaxAvgRecursive(arr, i += 1, min, max, sum)
}

console.log(minMaxAvgRecursive([1, 2, 3, 3, 3, 13]))