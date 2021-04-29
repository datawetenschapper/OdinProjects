
/*description

find out whether it's a leap year or not adhering to the arbitrary rules.

*/
/*steps we know

Check whether given year is divisible by four.
except for years that are also divisible by 100.
unless they are divisible by 400.

only need a truthy or false response

*/
/*things to consider

how do I exclude a number that is divisible by 100 but not 400 

*/

const leapYears = function (arg) {
nestedYear:
    if (arg % 4 == 0){
        if (arg % 100 == 0){
            if (arg% 400 == 0){
                console.log('divided 4')
                return true; 
            }
        console.log('divided 100')
        return false;
        }
        console.log('divided 4')
        return true; 
    }
    else return false;
}

module.exports = leapYears


if ( minValue<0 || typeof minValue!=="number" || typeof maxValue!=="number") {
    return "ERROR"
}
