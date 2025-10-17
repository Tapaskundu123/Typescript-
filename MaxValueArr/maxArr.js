function max(arr) {
    var maxVal = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (maxVal < arr[i]) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}
console.log(max([2, 4, 8, 6]));
