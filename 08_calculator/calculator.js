
const add = (a,b) => a+b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((total,current) => total + current,0);

const multiply = (array) => array.reduce((total,current) => total * current,1);

const power = (a,b) => a**b;

const factorial = a => {
  if (a===0) {
    a = 1;
  }
  else {
    for (let i = a-1; i>1; i--) {
      a = a*i
    }
  };
  return a;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
