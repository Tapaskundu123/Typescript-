var AverageArr = function (arr) {
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        avg = avg + arr[i];
    }
    avg = avg / arr.length;
    return avg;
};
console.log(AverageArr([2, 4, 5, 6]));
