let Binning = (str) => str.split('')
    .map(s => s.charCodeAt().toString(2))
    .map(s => '0'.repeat(8 - s.length) + s);

console.log("6.2. Бинарное слово");

console.log("Слово: man");
console.log(Binning('man'));

console.log("Слово: AB");
console.log(Binning('AB'));

console.log("Слово: wecking");
console.log(Binning('wecking'));

console.log("Слово: Ruby");
console.log(Binning('Ruby'));

console.log("Слово: Yosemite");
console.log(Binning('Yosemite'));