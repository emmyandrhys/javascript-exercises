const palindromes = function(a) {
    var string = a.toLowerCase();
    string = string.replace(/W+/, '');
    var gnirts = '';
    for (i=string.length - 1; i >= 0; i--){
        gnirts += string[i];
    }
    if (string===gnirts) {return true}
    else {return false};
}

module.exports = palindromes
