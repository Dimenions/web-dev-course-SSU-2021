
function CountingVowels(str) {
    const Vowels = str.match(/[aeiou]/gi);
    return Vowels ? Vowels.length : 0;
}


console.log("6.3. Подсчёт гласных");

console.log("Слово: abracadabra");
console.log(CountingVowels('abracadabra'));

console.log("Слово: ABRACADABRA");
console.log(CountingVowels('ABRACADABRA'));

console.log("Слово: o a kak ushakov lil vo kashu kakao");
console.log(CountingVowels('o a kak ushakov lil vo kashu kakao'));

console.log("Слово: my pyx");
console.log(CountingVowels('my pyx'));
