let Sorting = (arr) => arr.flat(1)
    .sort((a, b) => a - b);
console.log("6.1. Плоский массив");

console.log("Массив: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]");
console.log(Sorting([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

console.log("Массив:[]");
console.log(Sorting([]));

console.log("Массив: [[], []]");
console.log(Sorting([[], []]));

console.log("Массив: [[], [1]]");
console.log(Sorting([[], [1]]));

console.log("Массив:[[1, 3, 5], [-100], [2, 4, 6]]");
console.log(Sorting([[1, 3, 5], [-100], [2, 4, 6]]));
