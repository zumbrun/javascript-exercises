const repeatString = (rptString, rptNumber) => {
    if (rptNumber < 0) {
        return "ERROR";
    }
    let newString = '';
    for (let i = 1; i <= rptNumber; i++) {
        newString += rptString;
        console.log(newString);
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
