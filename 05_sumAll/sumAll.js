const sumAll = function(number1, number2) {
    let sum = 0;
    if ((typeof(number1) != "number") || (typeof(number2) != "number")) {
        return ("ERROR");
    }
    if ((number1 < 0) || (number2 < 0)) {
        return ("ERROR");
    }
    beginNumber = Math.min(number1, number2);
    endNumber = Math.max(number1, number2);
    for (i = beginNumber; i<= endNumber; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
