function maxInArray(arr: number[]): number {

    let maxVal: number = arr[0];
    for (let i = 1; i < arr.length; i++) {

        if (maxVal < arr[i]) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

const maxValue = maxInArray([2, 4, 8, 6]);
console.log(maxValue);