const ftoc = function(farenheit) {
   let celsius = 5 / 9 * (farenheit - 32) ;
   celsius = Math.round(celsius*10) / 10; 
   return celsius;
};

const ctof = function(celsius) {
  let farenheit = 9 / 5 * celsius + 32;
  farenheit = Math.round(farenheit * 10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
