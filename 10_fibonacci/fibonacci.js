const fibonacci = a => {
    if (a < 0) return "OOPS";
    let prevsum = 0;
    let currentsum = 1;
    let newsum = currentsum + prevsum;
    console.log({prevsum},{currentsum});
    for (let i = 1; i < a; i++) {
        newsum = currentsum + prevsum;
        prevsum = currentsum;
        currentsum = newsum;
        //console.log({prevsum},{currentsum}, {newsum});
    }
    return newsum;
};

// Do not edit below this line
module.exports = fibonacci;
