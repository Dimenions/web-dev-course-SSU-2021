function GetFormula(n) {
    var formula = "";
	var negativeDegree = false;
	if(!Number.isInteger(n) || n < -200 || n > 200)
		return "Error!! Invalid input";
	if (n == 0)
	    return "1"
	else if (n < 0) {
		formula += "1/("
		negativeDegree = true
		n *= -1
	}
	for (var i = n; i >= 0; i--) {
		var formula =  formula + GetCoefficient(BigInt(n), BigInt(n - i)).toString() + GetVariables(n, i).toString() + (i == 0 ? "" : "+") + (negativeDegree && i == 0 ? ")" : "")
	}
	return formula
}

function GetCoefficient(n, k) {
	var coefficient = GetFactorial(n) / (GetFactorial(k) * GetFactorial(n - k))
	return coefficient == 1 ? "" : coefficient;
}

function GetFactorial(n) {
    return n ? n * GetFactorial(n - 1n) : 1n
}

function GetVariables(n, i) {
    return GetVariablePush("a", i).toString() + GetVariablePush("b", n - i).toString()
}

function GetVariablePush(name, degree) {
    switch(degree) {
        case 0:
            return ""
        case 1:
            return `${name}`
        default:
            return `${name}^${degree}`
    }
}

console.log("7.3. Бином Ньютона")
console.log("Входные данные: 0")
console.log(GetFormula(0))

console.log("Входные данные: 1")
console.log(GetFormula(1))

console.log("Входные данные: 2")
console.log(GetFormula(2))

console.log("Входные данные: -2")
console.log(GetFormula(-2))

console.log("Входные данные: 3")
console.log(GetFormula(3))

console.log("Входные данные: 5")
console.log(GetFormula(5))

console.log("Входные данные: 201")
console.log(GetFormula(201))

console.log("Входные данные: 3.14")
console.log(GetFormula(3.14))