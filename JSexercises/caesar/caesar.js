const caesar = function (term, move) {
    let encrypted = [];
    let words = term.match(/\w/g)
    let unicode;
    if (move < 0) return caesar(term, move + 26); // this ensures the direction of the movement is singular. avoids complexity with lowercase and uppercase letters down the line.
    
    for (let i = 0; i < term.length; i++) {
        if (words.includes(term[i])) {
            unicode = term.charCodeAt(i) + move;
            if (term[i] == term[i].toLowerCase()) while (unicode > 122) unicode -= 26; //if the move is outside the unicode bounds of the alphabet loop around
            if (term[i] == term[i].toUpperCase()) while (unicode > 90) unicode -= 26;
            encrypted += String.fromCharCode(unicode);
            //console.log("Entered conditional => encrypted: " + term[i] + ' to ' + String.fromCharCode(unicode) + ' code post: ' + unicode + " code pre: " + term.charCodeAt(i));
            //console.log("Ended loop " + i + ' letter: ' + term[i] + ' sentence: ' + term + ' encryption: '+ encrypted + "\n"  );
        }
        else {encrypted += term[i];}}
    return encrypted
    //65  A
    //90  Z
    //97  a
    //122 z 
}

module.exports = caesar
