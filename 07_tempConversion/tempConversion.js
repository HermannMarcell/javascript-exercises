const convertToCelsius = function(x) {
  converted = (x - 32) * 5 / 9;
  return roundNumber(converted);
};

const convertToFahrenheit = function(x) {
  converted = x * 9 / 5 + 32;
  return roundNumber(converted);
};

const roundNumber = function (x) {
  rounded = Math.round(x * 10) / 10;
  return rounded;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
