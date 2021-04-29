// Description
/* 
  Two functions that convert temps Cels. and Fahr.
*/
// Instructions we know 
/*
  Rounded off to one decimal point
  (32°F − 32) × 5/9 = 0°C
  (0°C × 9/5) + 32 = 32°F
  var rounded = Math.round(number * 10) / 10
*/
// Steps to consider
/*
  skip.
*/


const ftoc = function(args) {
  resultCelsius = (args-32) * (5/9);
  var roundedCelsius = Math.round(resultCelsius * 10) / 10;
  return roundedCelsius;
}

const ctof = function(args) {
  resultFahrenheit = (args * (9/5)) + 32;
  var roundedFahrenheit = Math.round(resultFahrenheit* 10) / 10;
  return roundedFahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
