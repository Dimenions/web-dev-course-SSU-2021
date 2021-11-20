function RussianRoulette(numberOfPeople, bulletPosition) 
{
    let queue = Array.from({ length: numberOfPeople }, (_, i) => i + 1);
    
    for (let transfer = 1; queue.length > 1; transfer++) 
    {
        let current = queue.shift();
        if (transfer % bulletPosition == 0) 
        {
            transfer = 0;
            continue;
        }
        queue.push(current);
    }
    return queue.shift();
}

console.log("8.2. Игра на выбывание ")
console.log("7 человек, выбывает каждый 3")
console.log("Победил: ")
console.log(RussianRoulette(7, 3));

console.log("11 человек, выбывает каждый 19")
console.log("Победил: ")
console.log(RussianRoulette(11, 19));

console.log("1 человек, выбывает каждый 300")
console.log("Победил: ")
console.log(RussianRoulette(1, 300));

console.log("14 человек, выбывает каждый 2")
console.log("Победил: ")
console.log(RussianRoulette(14, 2));

console.log("100 человек, выбывает каждый 1")
console.log("Победил: ")
console.log(RussianRoulette(100, 1));