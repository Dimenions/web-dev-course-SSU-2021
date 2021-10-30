let FormattingAString = (str) => str.split('')
    .reduce((previousValue, currentValue, index) => previousValue + currentValue.toUpperCase() + currentValue.toLowerCase().repeat(index) + '-', '')
    .slice(0, -1);

console.log("6.4. Форматирование строки");

console.log("Строка: abcd");
console.log(FormattingAString('abcd'));

console.log("Строка: RqaEzty");
console.log(FormattingAString('RqaEzty'));

console.log("Строка: cwAt");
console.log(FormattingAString('cwAt'));