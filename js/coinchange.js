function coinChange(amount) {
    var changeDictionary = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };
    while (amount != 0) {
        if (amount / 25 > 1) {
            changeDictionary['quarters'] += 1;
            amount -= 25;
        } else if (amount / 10 > 1) {
            changeDictionary['dimes'] += 1;
            amount -= 10
        } else if (amount / 5 > 1) {
            changeDictionary['nickels'] += 1;
            amount -= 5;
        } else {
            changeDictionary['pennies'] += 1;
            amount -= 1
        }

    }
    return `Quarters: ${changeDictionary['quarters']}, Dimes: ${changeDictionary['dimes']}, Nickels: ${changeDictionary['nickels']}, Pennies: ${changeDictionary['pennies']}`
}

//console.log(coinChange(144))

function coinChangeRecursive(amount, changeDictionary = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
}) {

    if (amount == 0) {
        return `Quarters: ${changeDictionary['quarters']}, Dimes: ${changeDictionary['dimes']}, Nickels: ${changeDictionary['nickels']}, Pennies: ${changeDictionary['pennies']}`
    }
    if (amount > 25) {
        return coinChangeRecursive(amount -= 25, changeDictionary = {
            quarters: changeDictionary['quarters'] + 1,
            nickels: changeDictionary['nickels'],
            dimes: changeDictionary['dimes'],
            pennies: changeDictionary['pennies']
        })
    }
    if (amount > 10) {
        return coinChangeRecursive(amount -= 10, changeDictionary = {
            quarters: changeDictionary['quarters'],
            nickels: changeDictionary['nickels'],
            dimes: changeDictionary['dimes'] + 1,
            pennies: changeDictionary['pennies']
        })
    }
    if (amount > 5) {
        return coinChangeRecursive(amount -= 5, changeDictionary = {
            quarters: changeDictionary['quarters'],
            nickels: changeDictionary['nickels'] + 1,
            dimes: changeDictionary['dimes'],
            pennies: changeDictionary['pennies']
        })
    }
    if (amount >= 1) {
        return coinChangeRecursive(amount -= 1, changeDictionary = {
            quarters: changeDictionary['quarters'],
            nickels: changeDictionary['nickels'],
            dimes: changeDictionary['dimes'],
            pennies: changeDictionary['pennies'] + 1
        })
    }
}
var test = coinChangeRecursive(144)
console.log(test);