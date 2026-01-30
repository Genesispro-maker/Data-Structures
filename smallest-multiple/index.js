"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("../utils/range");
function checkifIndexisAnswer(index, divisor) {
    return divisor.every(function (rangeValue) { return index % rangeValue === 0; });
}
var SmallestMultiple = function (start, end) {
    var index = end;
    var answer;
    var divisors = (0, range_1.range)(start, end + 1);
    while (!answer) {
        answer = checkifIndexisAnswer(index, divisors);
        if (answer) {
            return index;
        }
        else {
            index += 1;
        }
    }
};
var answer = SmallestMultiple(1, 100);
console.log(answer);
