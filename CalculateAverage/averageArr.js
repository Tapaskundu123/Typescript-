"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AverageArr = (arr) => {
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        avg = avg + (arr[i] ?? 0);
    }
    avg = avg / arr.length;
    return avg;
};
console.log(AverageArr([2, 4, 5, 6]));
//# sourceMappingURL=averageArr.js.map