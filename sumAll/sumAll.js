
/*description

SumAll is a function that requires you to make a sum from two positive inputs within an array.
You take the lowest integer, add it to a total sum and then iterate it one digit higher until you have reached the upper limit.

*/
/*steps we know
sort with min, max

check if all inputs are:
    -positive
    -higher than 0
    -are ints



*/
/*things to consider

There are negative ints and the list could be disorganised.
Make as few checks within your loop as possible.

*/
const sumAll = function (min, max) {
    let varError = ('ERROR');
    const isPositiveInteger = (value) => {
  return Number.isInteger(value) && value > 0;
}
    if ((!isPositiveInteger(min) || !isPositiveInteger(max))) return varError;

    let varStart = (Math.min(min, max));
    let varEnd = (Math.max(min, max));
    let totalSum = 0;
    let i = varStart;



    for (; i <= varEnd; i++) {
        totalSum += i;       // adds current iteration to the sum
    }
    console.log('\n' + varStart + ' ' + typeof (varStart) + ' Start');
    console.log(varEnd + ' ' + typeof (varEnd) + ' End');
    console.log(totalSum + ' Total');
    console.log(`${i} Iteration`);
    return totalSum;
}

module.exports = sumAll
