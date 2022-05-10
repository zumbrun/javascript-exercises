const palindromes = function(str) {
    const strippedStr = str.replace(/[^a-zA-Z]/g,"")
    const lowerStr = strippedStr.toLowerCase();
    //console.log({lowerStr});
    const strArray = lowerStr.split("");
    //console.log({strArray});
    const revArray = strArray.reverse();
    //console.log({revArray});
    const joinStr = revArray.join("");
    console.log({joinStr}, {lowerStr});
    return joinStr === lowerStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
