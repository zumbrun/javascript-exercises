function removeFromArray(array, removeItem) {
     const filteredArray = [];
     for (let i = 1; i < arguments.length; i++) {
        removeItem = arguments[i];
        console.log(`removeItem is ${removeItem}`);
        let j = 0;
        for (item of array) {
            console.log(`the item is ${item}`);
            if (typeof(removeItem) == typeof(item)) {
                if (item == removeItem) {
                    array.splice(j,1);
                    console.log(`The spliced array is ${array}`);
                    break;
                }
            }
            j++;
        }      
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
