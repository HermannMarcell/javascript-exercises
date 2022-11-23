const { array, number, skipValidation } = require("yargs");

const removeFromArray = function() {
    arr = arguments[0];
    finalArr = arr;
    len = arguments.length;
    for (i = 1; i < len; i++) {
        if (typeof arguments[i] == "number" && arguments[i] <= len){
            index = finalArr.indexOf(arguments[i]);
            finalArr.splice(index, 1);
        }
    }
    return finalArr;
};


// Do not edit below this line
module.exports = removeFromArray;
