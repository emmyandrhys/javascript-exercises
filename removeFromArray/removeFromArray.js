const removeFromArray = function(arr,...arg) {
    let cleaned = []
    for (var x = 0; x < arr.length; x++) {
        var check = 0;
        for (var y = 0; y < arg.length; y++) {
            if (arr[x] === arg[y]) {
                check = 1;
            }}
        if (check == 0) {
            cleaned.push(arr[x]);
        }
    }
    return cleaned;
}

module.exports = removeFromArray
