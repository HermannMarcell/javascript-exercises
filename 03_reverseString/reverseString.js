const reverseString = function(string) {
    let len = string.length;
    let array = [];
    for (let i = 0; i < len; i++) {
        array.push(string[i])
    }
    revArray = array.reverse();
    return revArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
