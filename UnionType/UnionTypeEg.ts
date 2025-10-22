

function processValue(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase(); // returns string
    } else {
        return input * 2; // returns number
    }
}

console.log(processValue("hello")); // HELLO
console.log(processValue(10));      // 20

// const processValue = (input: string | number): string | number => {
//     if (typeof input === "string") {
//         return input.toUpperCase();
//     } else {
//         return input * 2;
//     }
// };

// console.log(processValue("hello")); // HELLO
// console.log(processValue(10));      // 20


const findValue = (input: number | string | boolean): number|string|boolean => {

    if( typeof input === "number"){
        let dollar= '$'
        let changeToStr= input.toString();
        let ans:string= dollar + changeToStr;
        
        return ans;
    }
    else if(typeof input === "boolean"){
        return true;
    }
    else if(typeof input === "string"){
       const first = input.charAt(0).toUpperCase();
       const rest = input.slice(1);
       return first + rest;
    }
    return input;
}

console.log(findValue(5));
console.log(findValue(true));
console.log(findValue("hello"));
