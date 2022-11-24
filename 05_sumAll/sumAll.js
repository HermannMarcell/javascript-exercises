const sumAll = function(a, b) {
    finalNum = 0;
    if (a < 0 || b < 0) {
        return "ERROR"
    } else if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR"
    } else {
        if (a < b) {
            finalNum = a;
            while (a < b) {
                ++a;
                finalNum += a;
            }
            return finalNum 
        } else {
            finalNum = b;
            while (b < a) {
                ++b;
                finalNum += b;
            }
            return finalNum
        }    
    } 
};

// Do not edit below this line
module.exports = sumAll;
