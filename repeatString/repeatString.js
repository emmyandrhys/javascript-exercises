const repeatString = function(string, times) {
    let bigstring = '';
    if (times >= 0) {
        for (times; times > 0; times--) {
            bigstring += string;
        }
        return bigstring;
    }
    else {         
        return 'ERROR';
}
}
repeatString('hey',3);
module.exports = repeatString
