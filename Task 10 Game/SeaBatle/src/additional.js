//Файл с функциями
function getRandomBetween(min, max) {//Случайное число
    return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomFrom(...args) {//Случайный элемент среди аргументов
    const index = Math.floor(Math.random() * args.length);
    return args[index];
}

function isUnderPoint(point, element) {//является ли точка над элементом
    const {left, top, width, height} = element.getBoundingClientRect();
    const {x, y} = point;

    return left <= x && x <= left + width && top <= y && y <= top + height;
}

function addListener(element, ...args) {
    element.addEventListener(...args);
    return () => element.removeEventListener(...args);
}

function getRandomSeveral(array = [], size = 1) {//Ищем пустые клетки
    array = array.slice();

    if (size > array.length) {
        size = array.length;
    }

    const result = [];

    while (result.length < size) {
        const index = Math.floor(Math.random() * array.length);
        const item = array.splice(index, 1)[0];
        result.push(item);
    }

    return result;
}
