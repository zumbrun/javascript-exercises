const reverseString = (string) => {
    let reverseString = '';
    for (let i = string.length-1 ; i >= 0; i--) {
        reverseString +=  string.charAt(i);
        console.log(reverseString);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
