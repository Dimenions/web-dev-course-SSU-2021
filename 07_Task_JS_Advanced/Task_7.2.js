function CreatorTable(m, n, message = " ") {
	var error = "Error!! Invalid input"
    if (!Number.isInteger(n) || !Number.isInteger(m))
		return error
	if (m <= 0 || n <= 0)
		return error
	if (m * n < message.length)
		return error
	var table = ""
	var index = 0
    var i = 0
    while (i < m) {
		var finalMessage = ""
		if (index <= message.length - 1)
			finalMessage = message.substring(index, index + n)
		else
			finalMessage = " ".repeat(n)
        index += n
		table += GetUpperBound(n) + "\n" + GetLine(finalMessage, n) + "\n"
        i++
	}
	table = table + GetUpperBound(n)
	return table
};

function GetUpperBound(length) {
	var row = "+"
	for (var i = 0; i < length; i++) {
        row = row + "---+"
	} 
	return row
}

function GetLine(finalMessage, n) {
	var row = "|"
    var string = " "
    while (n > finalMessage.length){
        finalMessage += string
    }
	for (var i = 0; i < finalMessage.length; i++) {
		row = row + " " + finalMessage[i] + " |" 
	}
	return row
}

console.log("7.2. Таблица")

console.log("Входные данные: 4, 4")
console.log(CreatorTable( 4, 4))

console.log("Входные данные: 4, 4, \"o\" ")
console.log(CreatorTable(4, 4, "o"))

console.log("Входные данные: 4, 4, \"Hello World!\" ")
console.log(CreatorTable(4, 4, "Hello World!"))

console.log("Входные данные: 4, 3, \"Nice pattern\" ")
console.log(CreatorTable(4, 3, "Nice pattern"))

console.log("Входные данные: 3, 4, \"Nice pattern\" ")
console.log(CreatorTable(3, 4, "Nice pattern"))

console.log("Входные данные: 3, 4, \"Nice pattern!!!!\" ")
console.log(CreatorTable(3, 4, "Nice pattern!!!!"))