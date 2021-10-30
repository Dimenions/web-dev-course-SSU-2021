let Isograms = (str) => new Set(str.toLowerCase()).size === str.length;

console.log('6.5. Изограммы');

console.log("Строка: Dermatoglyphics");
console.log(Isograms('Dermatoglyphics'));

console.log("Строка: aba");
console.log(Isograms('aba'));

console.log("Строка: moOse");
console.log(Isograms('moOse'));

console.log("Строка: " + "");
console.log(Isograms(""));