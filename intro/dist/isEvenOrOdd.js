"use strict";
// function isEven(a:number):string{
Object.defineProperty(exports, "__esModule", { value: true });
//     if(a%2==0){
//         return "even";
//     }
//     return "odd";
// }
// console.log(isEven(5));
// function isEven(a:number):boolean{
//     if(a%2==0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(5));
function isDividedBy4And8(b, c) {
    if (b % 4 == 0 && c % 8 == 0) {
        return "both divided by 4 and 8";
    }
    return "not divided";
}
console.log(isDividedBy4And8(17, 32));
//# sourceMappingURL=isEvenOrOdd.js.map