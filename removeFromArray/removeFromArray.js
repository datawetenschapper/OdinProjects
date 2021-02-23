const removeFromArray = function(... arguments) {
    let fullList = arguments[0]; // shift pulls out the 0'th element and places it in new var so all that remains is the eliminatory elements
    console.log(fullList);    
    const result = fullList.filter( e => !arguments.includes(e)) ; // filter finds every element within arguments that does not equates to the items in index[0]
    console.log (result);
    return (result);
 
    };
    
}

module.exports = removeFromArray
