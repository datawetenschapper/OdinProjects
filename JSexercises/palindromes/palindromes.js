const palindromes = function(phrase) {
    function clean(str) {
        return str.replace(/[^0-9a-z-A-Z ]/g, "").replace(/ +/, " ") // removes special characters
    }
    trimString = phrase.replace(/ /g, ''); // removes spaces between letters
    squeaky = clean(trimString.toLowerCase());
    stringSplit = squeaky.split(""); // makes it into an array
    arrayReversed = stringSplit.reverse();
    stringReversed = arrayReversed.join(""); // makes array into string
    console.log (stringReversed);
    console.log (squeaky);
    if (squeaky == stringReversed)return true;
    else return false;
}

module.exports = palindromes
