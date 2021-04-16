const fibonacci = function (num) {
    if (num < 0 ){
        return "OOPS"
    }
    console.log ('started')
    let a = 0;
    let b = 1;
    for (let start = 1; start < num; start++){
        iterant =b;
        b= a + b;
        a = iterant;
        
    }
    return (b);
}

module.exports = fibonacci
