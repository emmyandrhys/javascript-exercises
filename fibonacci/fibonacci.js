const fibonacci = function(a) {
    if(a<1){return "OOPS"}
    var fib = 1;
    var oldfib = 0;
    var temp = 0
    for (var i = 1; i < a; i++){
        temp = fib;
        fib += oldfib;
        oldfib = temp;
    }
    return fib;
}

module.exports = fibonacci
