function processValue(input) {
    if (typeof input === "string") {
        return input.toUpperCase(); // returns string
    }
    else {
        return input * 2; // returns number
    }
}
console.log(processValue("hello")); // HELLO
console.log(processValue(10)); // 20
// const processValue = (input: string | number): string | number => {
//     if (typeof input === "string") {
//         return input.toUpperCase();
//     } else {
//         return input * 2;
//     }
// };
// console.log(processValue("hello")); // HELLO
// console.log(processValue(10));      // 20
var findValue = function (input) {
    if (typeof input === "number") {
        var dollar = '$';
        var changeToStr = input.toString();
        var ans = dollar + changeToStr;
        return ans;
    }
    else if (typeof input === "boolean") {
        return true;
    }
    else if (typeof input === "string") {
        var first = input.charAt(0).toUpperCase();
        var rest = input.slice(1);
        return first + rest;
    }
    return input;
};
console.log(findValue(5));
console.log(findValue(true));
console.log(findValue("hello"));
