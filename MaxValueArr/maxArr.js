"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxInArray(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (maxVal < arr[i]) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}
const maxValue = maxInArray([2, 4, 8, 6]);
console.log(maxValue);
//# sourceMappingURL=maxArr.js.map