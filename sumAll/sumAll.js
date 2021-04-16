const sumAll = function(a, b) {
    if (typeof a != 'number' || typeof b != 'number' || a < 0 || b < 0) { return 'ERROR';}
    if (a > b) {
        var a_old = a;
        a = b;
        b = a_old;
    }
    let sum = 0
    for (a; a <= b; a++) {
        sum += a;
    }
    return sum;
}

module.exports = sumAll
