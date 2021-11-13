function GetNumber(inputSequence) {
	var error = "Error!! Invalid input"
	if (!Array.isArray(inputSequence) || inputSequence.length != 10)
		return error
	for (var number of inputSequence) {
		if(!Number.isInteger(number) || number < 0 || number > 9)
			return error
	}
	var numberBilder = inputSequence.join('')
	return "+7 (" + numberBilder.slice(0,3) + ") " + numberBilder.slice(3,6) + "-" + numberBilder.slice(6,8) + "-" + numberBilder.slice(8,10)
}

console.log("7.1. Номер телефона")

console.log("Массив: [9, 0, 0, 1, 1, 1, 2, 2, 3, 3]")
console.log(GetNumber([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]))

console.log("Массив: [9, 2, 7, 5, 5, 5, 6, 6, 9, 0]")
console.log(GetNumber([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]))

console.log("Массив: [1, 2, 3, 4, 5, 6, 7, 8, 9, -11]")
console.log(GetNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]))

console.log("Массив: []")
console.log(GetNumber([]))

console.log("Массив: [aw93fha=]")
console.log(GetNumber("aw93fha="))