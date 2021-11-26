function startTask_6_3() {
    var str = document.getElementById("Task_6.3").value;
    document.getElementById("ResultTask_6.3").innerHTML = CountingVowels(str).toString();
}

function resetTask_6_3() {
    document.getElementById("Task_6.3").value = "";
    document.getElementById("ResultTask_6.3").innerHTML = "";
}

function CountingVowels(str) {
    const Vowels = str.match(/[aeiou]/gi);
    return Vowels ? Vowels.length : 0;
}


/*console.log("6.3. Подсчёт гласных");

console.log("Слово: abracadabra");
console.log(CountingVowels('abracadabra'));

console.log("Слово: ABRACADABRA");
console.log(CountingVowels('ABRACADABRA'));

console.log("Слово: o a kak ushakov lil vo kashu kakao");
console.log(CountingVowels('o a kak ushakov lil vo kashu kakao'));

console.log("Слово: my pyx");
console.log(CountingVowels('my pyx'));*/
